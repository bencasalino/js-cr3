
var LogIn = angular.module("LogIn", ["ui.router"]);
LogIn.config(function($stateProvider, $urlRouterProvider)

//home landing page partial display 
 {
  $stateProvider.state("home", {
    url: "",
    templateUrl: "partials/home.html"
  });

// sign in / log in page partial display
  $stateProvider.state("sign-in", {
    url: "/sign-in",
    templateUrl: "partials/sign-in.html",
    controller: "SignInCtrl"
  });

// who has signed in partial display
  $stateProvider.state("who-is-here", {
    url: "/who-is-here",
    templateUrl: "partials/who-is-here.html",
    controller: "WhoIsHereCtrl"
  });
})
