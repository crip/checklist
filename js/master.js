jQuery(document).ready(function($) {
  hljs.initHighlightingOnLoad();  
});

var checklist = angular.module( "checklist", [] );

// Html filter
checklist.filter(
  "to_trusted", ['$sce', function($sce) {
    return function(text) {
      return $sce.trustAsHtml(text);
    };
}]);

// Main controller for application
checklist.controller(
  "CheckController",
  
  function( $scope ){

    $scope.checklist = [
    {
      section: "General",
      section_description: "Usable by all intended users, despite handicap, access device, or environmental conditions.",
      checkboxes: [
      {
        title: "Symbol/control must meet minimum size, space, and contrast requirements.",
        description: "Things to consider: Icon must be at least 16px to ensure minimum readability. \"Apple recommends a minimum target size of 44 pixels wide 44 pixels tall\" <a href='http://lukew.com/ff/entry.asp?1085' target='_blank'>(Touch Target Sizes)</a>.",
        code: "<pre><code class\"html\">&lt;section&gt;&lt;/section&gt;</code></pre>"
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, magni vero ad qui unde dolor autem numquam maiores doloremque eum? Modi totam excepturi cum deserunt dolores provident perspiciatis at consequuntur."
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, magni vero ad qui unde dolor autem numquam maiores doloremque eum? Modi totam excepturi cum deserunt dolores provident perspiciatis at consequuntur."
      }
      ]
    },
    {
      section: "General",
      section_description: "Hello World",
      checkboxes: [
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, magni vero ad qui unde dolor autem numquam maiores doloremque eum? Modi totam excepturi cum deserunt dolores provident perspiciatis at consequuntur."
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, magni vero ad qui unde dolor autem numquam maiores doloremque eum? Modi totam excepturi cum deserunt dolores provident perspiciatis at consequuntur."
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, magni vero ad qui unde dolor autem numquam maiores doloremque eum? Modi totam excepturi cum deserunt dolores provident perspiciatis at consequuntur."
      }
      ]
    },
    {
      section: "General",
      section_description: "Hello World",
      checkboxes: [
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, magni vero ad qui unde dolor autem numquam maiores doloremque eum? Modi totam excepturi cum deserunt dolores provident perspiciatis at consequuntur."
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, magni vero ad qui unde dolor autem numquam maiores doloremque eum? Modi totam excepturi cum deserunt dolores provident perspiciatis at consequuntur."
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, magni vero ad qui unde dolor autem numquam maiores doloremque eum? Modi totam excepturi cum deserunt dolores provident perspiciatis at consequuntur."
      }
      ]
    }
  ];

  }

);
