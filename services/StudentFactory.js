LogIn.factory("StudentFactory", function StudentFactory() {
  var factory = {};
  // this page is where all the login information is stored 
  factory.students = [{firstName: "Jerry",
                       lastName: "Seinfeld",
                       signedIn: false},
                       // will dynamically change from true to false
                       {firstName: "Cosmo",
                       lastName: "Kramer",
                       signedIn: true},

                       {firstName: "Larry",
                       lastName: "David",
                       signedIn: true},

                       {firstName: "Elaine",
                       lastName: "Benes",
                       signedIn: true},

                       {firstName: "George",
                       lastName: "Costanza",
                       signedIn: true},];
  return factory;
});
