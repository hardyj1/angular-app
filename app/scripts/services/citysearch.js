'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the angularAppApp.
 */
 angular.module('angularAppApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&units=imperial&type=like&mode=json&APPID=18709baeb8d1aae11cca83e25ed9f9ba', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
