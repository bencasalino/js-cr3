//info needed for angular to work?
// also the only thing not linked in index.html??
var LogIn = angular.module("LogIn", ["ui.router"]);
LogIn.config(function($stateProvider, $urlRouterProvider)

//
 {
  $stateProvider.state("home", {
    url: "",
    templateUrl: "partials/home.html"
  });

// tells angular to show the /sign-in page ?
  $stateProvider.state("sign-in", {
    url: "/sign-in",
    templateUrl: "partials/sign-in.html",
    controller: "SignInCtrl"
  });

// tells angular to show the /who-is-here page 
  $stateProvider.state("who-is-here", {
    url: "/who-is-here",
    templateUrl: "partials/who-is-here.html",
    controller: "WhoIsHereCtrl"
  });
})
