angular.module("app").config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "app/templates/home.html"
    })
    .when("/about",{
        templateUrl: "app/templates/about.html"
    })
    .when("/comingsoon",{
        templateUrl: "app/templates/comingsoon.html"
    })
    .when("/contact",{
        templateUrl: "app/templates/contact.html"
    })
    .when("/destinations",{
        templateUrl: "app/templates/destinations.html"
    })
    .when("/promos",{
        templateUrl: "app/templates/promos.html"
    })
    .when("/privacy",{
        templateUrl: "app/templates/privacy.html"
    })
    .when("/travel",{
        templateUrl: "app/templates/travel.html"
    })
    .otherwise({
        templateUrl: "app/templates/error.html"
    });
});