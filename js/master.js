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

    $scope.clicked = function( $event ) {
      var more = jQuery( $event.target )
          desc = more.next();
      desc.slideToggle(250);
    };

    $scope.checklist = [
    {
      section: "General",
      section_description: "Usable by all intended users, despite disability, access device, or environmental conditions.",
      checkboxes: [
      {
        title: "Symbol/control must meet minimum size, space, and contrast requirements.",
        description: "Things to consider: Icon must be at least 16px to ensure minimum readability. \"Apple recommends a minimum target size of 44 pixels wide 44 pixels tall\" <a href='http://lukew.com/ff/entry.asp?1085' target='_blank'>(Touch Target Sizes)</a>."
      },
      {
        title: "Adjust elements in close proximity of each other with similar shape, size and color.",
        description: "Things to consider: Elements with similar shape, size, colour, will cause a delay in response."
      },
      {
        title: "Contrast ratios are accessible when using multiple colours.",
        description: "<a href=\"http://contrastchecker.com/\" target=\"_blank\">Contrast Checker</a>"
      },
      {
        title: "Typography is optimal for reading in any given environment/context.",
        description: "Things to consider: desktop (20-24 inches away from screen), tablet (18 inches away from screen) and mobile screen (16 inches away from screen)? <a href=\"http://sizecalc.com/\" target=\"_blank\">Size Calculator</a> and <a href=\"http://type-scale.com/\" target=\"_blank\">Type Scale</a>"
      },
      {
        title: "Ensure there are fallbacks in place for accessibility purposes.",
        description: "Things to consider: Alternative text for images, fallback text for icons (<a href=\"http://filamentgroup.com/lab/bulletproof_icon_fonts.html\" target=\"_blank\">Bulletproof Accessible Icon Fonts</a>) and for more information, please visit the <a href=\"http://www.w3.org/standards/webdesign/accessibility\" target=\"_blank\">W3 Accessibility Standards</a>."
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
