jQuery(document).ready(function($) {
  hljs.initHighlightingOnLoad();  
});

var checklist = angular.module( "checklist", [] );

// Main controller for application
checklist.controller(
  "CheckController",
  
  function( $scope ){

    $scope.checklist = [
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
