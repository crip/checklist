jQuery(document).ready(function($) {
  hljs.initHighlightingOnLoad();
  fixNav();
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

    // Scroll to top
    $scope.scrollTop = function() {
      $("html, body").animate({ scrollTop: 0 }, "fast");
      return false;
    };

    // Print page
    $scope.printInfo = function() {
      window.print();
    };

    // Checklist data
    var checkboxes = [
    {
      section: "General",
      section_description: "Usable by all intended users, despite disability, access device, or environmental conditions.",
      checkboxes: [
        {
          title: "Symbol/control must meet minimum size, space, and contrast requirements.",
          description: "Things to consider: Icon must be at least 16px to ensure minimum readability. \"Apple recommends a minimum target size of 44 pixels wide 44 pixels tall\" <a href='http://lukew.com/ff/entry.asp?1085' target='_blank'>(Touch Target Sizes)</a>.",
          done: false
        },
        {
          title: "Adjust elements in close proximity of each other with similar shape, size and color.",
          description: "Things to consider: Elements with similar shape, size, colour, will cause a delay in response.",
          done: false
        },
        {
          title: "Contrast ratios are accessible when using multiple colours.",
          description: "<a href=\"http://contrastchecker.com/\" target=\"_blank\">Contrast Checker</a>",
          done: false
        },
        {
          title: "Typography is optimal for reading in any given environment/context.",
          description: "Things to consider: desktop (20-24 inches away from screen), tablet (18 inches away from screen) and mobile screen (16 inches away from screen)? <a href=\"http://sizecalc.com/\" target=\"_blank\">Size Calculator</a> and <a href=\"http://type-scale.com/\" target=\"_blank\">Type Scale</a>",
          done: false
        },
        {
          title: "Ensure there are fallbacks in place for accessibility purposes.",
          description: "Things to consider: Alternative text for images, fallback text for icons (<a href=\"http://filamentgroup.com/lab/bulletproof_icon_fonts.html\" target=\"_blank\">Bulletproof Accessible Icon Fonts</a>) and for more information, please visit the <a href=\"http://www.w3.org/standards/webdesign/accessibility\" target=\"_blank\">W3 Accessibility Standards</a>.",
          done: false
        }
      ]
    }
    ];

    $scope.show = "All";

    /**
     * Check if data has been modified, otherwise user checkboxes standard
     */
    if (localStorage["checklist"] == "" || localStorage["checklist"] == null) {
      $scope.checklist = checkboxes;
    }
    else {
      $scope.checklist = JSON.parse(localStorage["checklist"]);
    }

    /**
     * Always watch for changes
     */
    $scope.$watch("checklist", function() {
      localStorage["checklist"] = JSON.stringify($scope.checklist);
    }, true);

    /**
     * Clear LocalStorage
     */
    $scope.clearLocalStorage = function() {
      var confirmClear = confirm("Are you sure you want to clear the progress?");
      if( confirmClear ) {
        localStorage["checklist"] = "";
        $scope.checklist = checkboxes;
      }
    }

    // slideToggle for checkbox description
    $scope.clicked = function( $event ) {
      var more = jQuery( $event.target )
          desc = more.next();
      desc.slideToggle(250);
    };

    /* Filter Function for All | Incomplete | Complete */
    $scope.showFn = function  (todo) {
      if ($scope.show === "All") {
        return true;
      }else if(todo.done && $scope.show === "Complete"){
        return true;
      }else if(!todo.done && $scope.show === "Incomplete"){
        return true;
      }else{
        return false;
      }
    };

  }

);

function fixNav(){
  var spySection = $(".header");

  $(window).scroll(function(){
    if ($(this).scrollTop() > spySection.outerHeight()) {
      $(".top-nav").addClass('fixed-pos');
    } else {
      $(".top-nav").removeClass('fixed-pos');
    }
  });
}
