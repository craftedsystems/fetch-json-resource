# Fetch JSON Resource


[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=code_smells)](https://sonarcloud.io/dashboard?id=craftedsystems_fetch-json-resource)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=coverage)](https://sonarcloud.io/dashboard?id=craftedsystems_fetch-json-resource)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=craftedsystems_fetch-json-resource)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=craftedsystems_fetch-json-resource)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=security_rating)](https://sonarcloud.io/dashboard?id=craftedsystems_fetch-json-resource)
[![SonarCloud Bugs](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=bugs)](https://sonarcloud.io/component_measures/metric/reliability_rating/list?id=craftedsystems_fetch-json-resource)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=alert_status)](https://sonarcloud.io/dashboard?id=craftedsystems_fetch-json-resource) 
[![SonarCloud Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=vulnerabilities)](https://sonarcloud.io/component_measures/metric/security_rating/list?id=craftedsystems_fetch-json-resource)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=craftedsystems_fetch-json-resource&metric=sqale_index)](https://sonarcloud.io/dashboard?id=craftedsystems_fetch-json-resource)

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

## Dev

```bash
# Install
npm i

# Dev
npm run dev

# Build
npm run build
```
