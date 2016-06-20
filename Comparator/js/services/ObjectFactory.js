angular.module('Comparator.Services').service('ObjectFactory', function () {
   return {
       'mapDummyItem' : function (name, imgUrl, shortDescription, longDescription, price, ratingOutOf5) {
           return new ItemType(name, imgUrl, shortDescription, longDescription, price, ratingOutOf5);
       }
   };
});