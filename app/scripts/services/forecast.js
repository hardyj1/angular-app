'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.forecast
 * @description
 * # forecast
 * Factory in the angularAppApp.
 */
 angular.module('angularAppApp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=18709baeb8d1aae11cca83e25ed9f9ba', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });
