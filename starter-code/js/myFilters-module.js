(function(){
  'use strict'

  angular.module('myFilters', [])

    .filter('firstName', function(){

      return function(fullName) {
        var firstName;
        firstName = fullName.slice(0, fullName.indexOf(' '));

        return firstName;
      }


    })

    .filter('ellipsis', function() {
      return function(text, trimSize) {
        var trimmed;
        var ellipsisCharCode = '\u2026';

        trimmed = text.slice(0, trimSize) + ellipsisCharCode;

        return trimmed;

      }
    })

    .filter('lastName', function() {
      return function(fullName) {
        var lastName, lNIndex;
        for (var i = fullName.length - 1; i > 0; i--)
            if (fullName[i] === " ") {
              lNIndex = i + 1;
              break;
            }
        console.log(fullName);
        lastName = fullName.slice(lNIndex);
        return lastName;
      };
    
    });


})();