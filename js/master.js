jQuery(document).ready(function($) {
  hljs.initHighlightingOnLoad();  
});

var checklist = angular.module( "checklist", [] );

// Main controller for application
checklist.controller(
  "CheckController",
  
  function( $scope, $timeout ){

    // I sort the given collection on the given property.
    function sortOn( collection, name ) {

      collection.sort(
        function( a, b ) {

          if ( a[ name ] <= b[ name ] ) {

            return( -1 );

          }

          return( 1 );

        }
      );

    }

    // Group the checkboxes in given category
    $scope.groupBy = function( attr ) {

      // Reset the categories
      $scope.categories = [];

      sortOn( $scope.checklist, attr );

      // Determine which category we are currently in
      var categoryValue = "_INVALID_CATEGORY_VALUE";

      /**
       * As we loop over each checkbox item, add it to the
       * current category - we'll create a NEW category every
       * time we come across a new attribute value.
       */
      for ( var i = 0; i < $scope.checklist.length; i++ ) {

        var check = $scope.checklist[ i ];

        if ( check[ attr ] !== categoryValue ) {

          var category = {
            label: check[ attr ],
            checkboxes: []
          };

          categoryValue = category.label;

          $scope.categories.push( category );

        }

        category.checklist.push( check );

      }

    }

    $scope.checklist = [
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, magni vero ad qui unde dolor autem numquam maiores doloremque eum? Modi totam excepturi cum deserunt dolores provident perspiciatis at consequuntur.",
        category: "General"
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, magni vero ad qui unde dolor autem numquam maiores doloremque eum? Modi totam excepturi cum deserunt dolores provident perspiciatis at consequuntur.",
        category: "General"
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, magni vero ad qui unde dolor autem numquam maiores doloremque eum? Modi totam excepturi cum deserunt dolores provident perspiciatis at consequuntur.",
        category: "General"
      }
    ];

  }

);
