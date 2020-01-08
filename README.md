# Fetch JSON Resource

<p>
  <a href="https://www.npmjs.com/package/fetch-json-resource">
    <img src="https://img.shields.io/npm/v/fetch-json-resource.svg" alt="npm version" >
  </a>
  <a href="https://github.com/craftedsystems/fetch-json-resource/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/fetch-json-resource.svg" alt="license">
  </a>
  <a href="https://david-dm.org/craftedsystems/fetch-json-resource">
    <img src="https://david-dm.org/craftedsystems/fetch-json-resource/status.svg" alt="dependency status">
  </a>
  <a href="https://david-dm.org/craftedsystems/fetch-json-resource">
    <img src="https://david-dm.org/craftedsystems/fetch-json-resource/status.svg" alt="dependency status"/>
  </a>
  <a href="https://david-dm.org/craftedsystems/fetch-json-resource?type=dev">
    <img src="https://david-dm.org/craftedsystems/fetch-json-resource/dev-status.svg" alt="devDependencies status">
  </a>
</p>

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=code_smells)](https://sonarcloud.io/dashboard?id=craftedsystems_fetch-json-resource)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=craftedsystems_fetch-json-resource)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=craftedsystems_fetch-json-resource)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=security_rating)](https://sonarcloud.io/dashboard?id=craftedsystems_fetch-json-resource)
[![SonarCloud Bugs](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=bugs)](https://sonarcloud.io/component_measures/metric/reliability_rating/list?id=craftedsystems_fetch-json-resource)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=alert_status)](https://sonarcloud.io/dashboard?id=craftedsystems_fetch-json-resource)
[![SonarCloud Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=vulnerabilities)](https://sonarcloud.io/component_measures/metric/security_rating/list?id=craftedsystems_fetch-json-resource)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=sqale_index)](https://sonarcloud.io/dashboard?id=craftedsystems_fetch-json-resource)

**Fetch JSON resource with AbortController and error handling.**  
~600 bytes gzipped

## Usage

```bash
# Install
npm i fetch-json-resource
```

```javascript
import fetchJson from 'fetch-json-resource';

fetchJson('https://jsonplaceholder.typicode.com/todos/1')
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
```

## Dev

```bash
# Install
npm i

# Dev
npm run dev

# Build
npm run build
```
