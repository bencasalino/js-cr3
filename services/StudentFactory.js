LogIn.factory("StudentFactory", function StudentFactory() {
  var factory = {};
  factory.students = [{firstName: "Jerry",
                       lastName: "Seinfeld",
                       signedIn: false},

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
