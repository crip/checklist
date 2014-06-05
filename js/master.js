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
      if ( $(window).scrollTop() != 0 ) {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        return false;
      }
      else {
        var siteTitle = $(".site-title").text();
        setTimeout(function() {
          $(".site-title").text("You're at the top, you crip!");
          setTimeout(function() {
            $(".site-title").text(siteTitle);
          }, 2500);
        }, 10);
      }
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
        },
        {
          title: "Provide meaningful alternative text for your images",
          description: "Alternative text provides textual alternative to images to <abbr title=\"Assistive Technology\"AT users.",
          code: "<pre><code class=\"html\">&lt;!-- Good --&gt;<br>&lt;img src=\"img/crip.jpg\" alt=\"A crip trying to take the stairs\"&gt;<br><br>&lt;!-- Bad --&gt;<br>&lt;img src=\"img/crip.jpg\" alt=\"Crip\"&gt;</code></pre>",
          done: false
        },
        {
          title: "Only provide alternative text for important content",
          description: "Only provide alternative text for images that are important to the content, and not to images that are for decorations only. If an image doesn’t require alt attribute, give it an empty value. If we leave out the alt attribute, screen readers will read out the URL of the image instead.",
          code: "<pre><code class=\"html\">&lt;!-- Good --&gt;<br>&lt;img src=\"ad.jpg\" alt&gt;<br><br>&lt;!-- Bad --&gt;<br>&lt;img src=\"ad.jpg\"&gt;</code></pre>",
          done: false
        },
        {
          title: "Use the correct heading hierarchy",
          description: "Create an appropriate document structure by using the correct heading level, i.e. <code>&lt;h1&gt;</code> follows by <code>&lt;h2&gt;</code>, then <code>&lt;h3&gt;</code> etc. However, do not use heading level as a mean of formatting text, e.g. don’t style a heading as <code>&lt;h3&gt;</code> simply because it has the same font size and style. Instead, use the appropriate heading level but add a class of the heading that matches the design. <br><br>In the latest <a href=\"http://webaim.org/projects/screenreadersurvey4/\">Screen Reader Survey</a> conducted by WebAIM, 47% of surveyed people still find using <a href=\"http://webaim.org/projects/screenreadersurvey4/#levels\">heading level</a> to navigate around the site useful.",
          code: "<pre><code class=\"html\">&lt;!-- Good --&gt;<br>&lt;h1&gt;Heading 1&lt;/h1&gt;&lt;h2&gt;Heading 2&lt;/h2&gt;<br><br>&lt;!-- Good - when your h2 looks like the styling of a h3 --&gt;<br>&lt;h1&gt;Heading 1&lt;/h1&gt;<br>&lt;h2 class=\"h3\"&gt;Heading 2&lt;/h2&gt;<br><br>&lt;!--<br> Bad — when you try to match the styling of a h2 with a h3<br> by using the wrong heading level <br>--&gt;<br>&lt;h1&gt;Heading 1&lt;/h1&gt;<br>&lt;h3&gt;Heading 2&lt;/h3&gt;</code></pre>",
          done: false
        },
        {
          title: "Provide meaninful link description",
          description: "By having descriptive links, when screenreader users set their screen reader to only read out links, they’ll be able to understand what they’re for when the links get read out. Avoid having links with generic descriptions like \"click me\" or \"read more\". However if you must use generic descriptions, add a <code>title</code> attribute with a better description, or hide the description off screen using helper classes.",
          code: "<pre><code class=\"html\">&lt;!-- Good - hide description using helper classes --&gt;<br>&lt;a href=\"http://crip.io\"&gt;<br>Read more &lt;span class=\"hide-visually\"&gt;about Crip as a Service&lt;/span&gt;<br>&lt;/a&gt;<br><br>&lt;!-- Good - use title attribute to add description --&gt;<br>&lt;a href=\"http://crip.io\" title=\"Read more about Crip as a Service\"&gt;<br>Read more<br>&lt;/a&gt;<br><br>&lt;!-- Bad - generic description --&gt;<br>&lt;a href=\"http://crip.io\"&gt;Read more&lt;/a&gt;<br><br>&lt;!-- Bad - generic description --&gt;<br>&lt;a href=\"http://crip.io\"&gt;Click here&lt;/a&gt; for more information <br>about Crip as a Service.</code></pre>",
          done: false
        },
        {
          title: "Ensure your content follows a logical tab order",
          description: "Having a logical tab order is important to keyboard users, so avoid setting tabindex specifically.",
          code: "<pre><code class=\"html\">&lt;!-- Bad --&gt;<br>&lt;a href=\"http://xmen.com\" tabindex=\"2\"&gt;The Mutants&lt;/a&gt;<br>&lt;a href=\"http://crip.io\" tabindex=\"3\"&gt;Crip as a Service&lt;/a&gt;</code></pre>",
          done: false
        },
        {
          title: "Provide focus state",
          description: "Provide focus state on any focusable elements e.g. links, buttons. Anywhere hover state is declared, focus style should be declared as well, and at least have it matching the hover style if there isn’t specific focus style. Also, never set <a href=\"http://outlinenone.com/\">outline: none</a> in your CSS.",
          code: "<pre><code class=\"css\">/\* Good - specific focus style *\/<br>a:focus {<br> /\**<br>  * Styles that will clearly indicate to <br>  * user the focused element<br>  *\/<br>}<br><br>/\* Good - focus style matching hover style*\/<br>a:hover,<br>a:focus {<br> /\**<br>  * Styles that will clearly indicate to user<br>  * the hovered or focused element<br>  *\/<br>}<br><br>/\* Bad - removing focus outline *\/<br>a:focus {<br>outline: none;<br>}</code></pre>",
          done: false
        },
        {
          title: "Ensure your site works without JavaScript",
          description: "With components that require JavaScript (e.g. tabs), ensure you can still access the content after JavaScript has been turned off. You can achieve this by using the class <code>.no-js</code> to create styling specifically for non-JS users. The <code>.no-js</code> class gets replaced with <code>.js</code> when JavaScript is turned on. We use the script developed by <a href=\"http://paulirish.com/2009/avoiding-the-fouc-v3/\">Paul Irish</a> to do the detection. It needs to be set in the <code>&lt;head&gt;</code>.",
          code: "<pre><code class=\"css\">/\* Good *\/<br>.tab-content {<br>  display: none;<br>}<br><br>.no-js .tab-content {<br>  display: block;<br>}<br><br>/\* Bad - No non-JS styles to make the content visible *\/<br>.tab-content {<br>  display: none;<br>}</code></pre>",
          done: false
        },
        {
          title: "All form fields should have an associated label",
          description: "Form fields must have a label associated to it, otherwise they will not be accessible to screenreaders. The label’s for attribute needs to match the id of the form field. This will also help to increase the click area of the form field. If the label is not visible in the design, use the helper class <code>.hide-visually</code> to hide the label off screen.",
          code: "<pre><code class=\"html\">&lt;!-- Good --&gt;<br>&lt;label for=\"search\"&gt;Search&lt;/label&gt;<br>&lt;input type=\"text\" id=\"search\" /&gt;<br><br>&lt;!-- Good - hide label off screen --&gt;<br>&lt;label for=\"search\" class=\"hide-visually\"&gt;Search&lt;/label&gt;<br>&lt;input type=\"text\" id=\"search\" /&gt;<br><br>&lt;!-- Bad - label’s for attribute doesn’t match the form field’s id --&gt;<br>&lt;label for=\"searchField\" class=\"hide-visually\"&gt;Search&lt;/label&gt;<br>&lt;input type=\"text\" id=\"search\" /&gt;<br><br>&lt;!-- Bad - no label --&gt;<br>&lt;input type=\"text\" id=\"search\" /&gt;</code></pre>",
          done: false
        }
      ]
    },
    {
      section: "Template guidelines",
      section_description: "To use your templates, many customers will rely on ease of access features or devices such as screen readers and high contrast settings. As you develop templates, keep these accessibility guidelines in mind.",
      checkboxes: [
        {
          title: "Provide skip link",
          description: "All templates should include a skip link that's hidden off screen but when tab into it via keyboard, it'll become visible to the users. This is important for keyboard users and AT users, and is to allow them to skip over navigations and less important information in the header. The skip link should have a href value that matches the id of the main container.<br><br>In cases where you want to hide the skip link off screen but make it appear on screen when focused, you can add the helper classes <code>.hide-visually</code> and <code>.focusable</code> to achieve this.",
          code: "<pre><code class=\"html\">&lt;a href=\"#main\" class=\"hide-visually focusable\"&gt;Skip to content&lt;/a&gt;<br><br>[...]<br><br>&lt;!-- The skip link’s href should match the id of the main content container --&gt;<br>&lt;main class=\"main\" id=\"main\" role=\"main\"&gt;</code></pre>",
          done: false
        },
        {
          title: "ARIA Roles",
          description: "A template is generally made up of layout with the following major blocks:<br><br><ul><li><code>&lt;header&gt;</code> with <code>role=banner</code> : usually contains site-wide specific content such as logo, navigation, global search.</li><li><code>&lt;nav&gt;</code> with <code>role=navigation</code>: a list of navigational links that allow users to navigate to other parts of the site/page. Not all links need to use a <code>&lt;nav&gt;</code> element. It should only be used on major navigational blocks.</li><li><code>role=main</code> on container around the main content.</li><li><code>role=complementary</code> on container (the aside element) with supporting information of the document.</li><li><code>role=contentinfo</code> on container (the footer element) around metadata of the document, e.g. footnote, copyright statement.</li></ul>ARIA roles information from: <a href=\"http://www.paciellogroup.com/blog/2010/10/using-wai-aria-landmark-roles/\">Using WAI-ARIA landmark roles</a>",
          code: "<pre><code class=\"html\">&lt;!-- Example: --&gt;<br><br>&lt;header role=\"header\"&gt;<br>  Site wide specific content e.g. logo, global search, navigation<br><br>  &lt;nav role=\"navigation\"&gt;<br>    &lt;ul&gt;<br>      &lt;li&gt;Nav item 1&lt;/li&gt;<br>      &lt;li&gt;Nav item 2&lt;/li&gt;<br>    &lt;/ul&gt;<br>  &lt;/nav&gt;<br>&lt;/header&gt;<br><br>&lt;main role=\"main\"&gt;<br>  Your main content<br>&lt;/main&gt;<br><br>&lt;aside role=\"complementary\"&gt;<br>  Secondary content<br>&lt;/aside&gt;<br><br>&lt;footer role=\"contentinfo\"&gt;<br>  Footnote, copyright statement<br>&lt;/footer&gt;</code></pre>",
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
