/**
 * Created by mhughes on 20/10/2014.
 */
var app = angular.module("sampleApp", ["firebase"]);

// let's create a re-usable factory that generates the $firebaseSimpleLogin instance
app.factory("simpleLogin", ["$firebaseSimpleLogin", function($firebaseSimpleLogin) {
    var ref = new Firebase("https://purposepal.firebaseio.com/");
    return $firebaseSimpleLogin(ref);
}]);

// and use it in our controller
app.controller("SampleCtrl", ["$scope", "simpleLogin", function($scope, simpleLogin) {
    $scope.auth = simpleLogin;
}]);
