[![NPM version][npm-image]][npm-url]
# \<ozone-search-helper\>

Helper to build ozone-search query

## usage
```javaScript
  import {SearchQuery} from 'ozone-search-helper'

  let searchQuery = new SearchQuery();
  searchQuery.quicksearch('');
  const searchGenerator = ozoneItemApi.search(searchQuery);
  searchGenerator.next().then((results){
     console.log(results)
  });

```


## Install

```
$ npm install ozone-search-helper
```



[npm-image]: https://badge.fury.io/js/ozone-search-helper.svg
[npm-url]: https://npmjs.org/package/ozone-search-helper

