# Fetch JSON Resource

**Fetch JSON resource with AbortController and error handling.**

* no dependencies
* ~600 bytes gzipped

## Usage

```bash
# Install
npm i fetch-json-resource
```

```javascript
import fetchJsonResource from 'fetch-json-resource';

fetchJsonResource('https://jsonplaceholder.typicode.com/todos/1')
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
```

## Options

You can add additional fetch options and/or a custom timeout value.

```javascript
import fetchJsonResource from 'fetch-json-resource';

// Fetch options
const options = {};

// Abort after 5 seconds
const timeout = 5000;

fetchJsonResource('https://jsonplaceholder.typicode.com/todos/1', options, timeout)
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
```
