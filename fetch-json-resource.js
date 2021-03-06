/**
 * Check if error is an Abort Controller timeout error
 * @param {object} error
 * @param {number?} error.code
 * @param {string?} error.name
 * @returns {boolean}
 */
function isAbortControllerTimeoutEvent(error) {
  return (
    error &&
    error.code === 20 &&
    error.name === 'AbortError'
  );
}

/**
 * Map network error
 * @param {object} error
 * @param {number?} error.code
 * @param {string?} error.id
 * @param {string?} error.message
 * @param {string?} error.name
 * @param {string?} error.type
 */
function mapNetworkError(error) {
  if (isAbortControllerTimeoutEvent(error)) {
    return Promise.reject({
      id: 'network-timeout',
      message: 'Network timeout',
      type: 'app:network-timeout',
    });
  }
  return Promise.reject({
    id: error.id || 'network-error',
    message: error.message || 'unknown network error',
    type: error.type || 'app:unknown-network-error',
  });
}

/**
 * Check for AbortController support
 * base on
 * https://github.com/mo/abortcontroller-polyfill/blob/f20480d50d642d65790ee1af80e54a71506bcd46/src/abortcontroller-polyfill.js
 * https://github.com/mo/abortcontroller-polyfill/blob/f20480d50d642d65790ee1af80e54a71506bcd46/src/utils.js
 */
function hasAbortController() {
  const self = typeof window !== 'undefined' && typeof window.self !== 'undefined'
    ? window.self
    // @ts-ignore
    : global;

  // Note that the "unfetch" minimal fetch polyfill defines fetch() without
  // defining window.Request, and this polyfill need to work on top of unfetch
  // so the below feature detection needs the !self.AbortController part.
  // The Request.prototype check is also needed because Safari versions 11.1.2
  // up to and including 12.1.x has a window.AbortController present but still
  // does NOT correctly implement abortable fetch:
  // https://bugs.webkit.org/show_bug.cgi?id=174980#c2
  // @ts-ignore
  // eslint-disable-next-line no-prototype-builtins
  const polyfillNeeded = (typeof (self.Request) === 'function' && !self.Request.prototype.hasOwnProperty('signal')) || !self.AbortController; // NOSONAR
  return !polyfillNeeded;
}

/**
 * Add AbortController
 * Use AbortController to be able to send abort signal to fetch and handle network timeouts.
 * @param {object} options
 */
function addAbortController(options, timeout) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeout);
  return {
    ...options,
    signal: controller.signal,
  };
}

/**
 * Get last error type segment
 * @param {string} type
 */
function getLastErrorTypeSegment(type) {
  if (!type) return null;
  return type.split(':').pop();
}

/**
 * Parse response as JSON
 * @param {object} response
 */
async function toJSON(response) {
  try {
    const json = await response.json();
    if (json.type) {
      json.id = getLastErrorTypeSegment(json.type);
      return Promise.reject(json);
    }
    return json;
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * Fetch resource
 * @param {string} url
 * @param {object=} options
 * @param {number=} timeout in milliseconds (default 10000)
 */
async function fetchJsonResource(url, options, timeout = 10000) {
  const fetchOptions = hasAbortController()
    ? addAbortController(options, timeout)
    : options;
  return fetch(url, fetchOptions)
    .then((response) => toJSON(response))
    .catch((error) => mapNetworkError(error));
}

module.exports = fetchJsonResource;
