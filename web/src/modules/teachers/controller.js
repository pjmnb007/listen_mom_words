require('./service.js')

angular.module('theacher')
.controller('TheacherController', function($scope,$routeParams,Theachers){
	  // Create new Theacher
    $scope.create = function () {
      // Create new Theacher object
      var theacher = new Theachers({
        name: this.name,
        content: this.content
      });

      // Redirect after save
      theacher.$save(function (response) {
        $location.path('theacher/' + response._id);

        // Clear form fields
        $scope.name = '';
        $scope.content = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Theacher
    $scope.remove = function (theacher) {
      if (theacher) {
        theacher.$remove();

        for (var i in $scope.theachers) {
          if ($scope.theachers[i] === theacher) {
            $scope.theachers.splice(i, 1);
          }
        }
      } else {
        $scope.theacher.$remove(function () {
          $location.path('theacher');
        });
      }
    };

    // Update existing Theacher
    $scope.update = function () {
      var theacher = $scope.theacher;

      theacher.$update(function () {
        $location.path('theachers/' + theacher._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Theachers
    $scope.find = function () {
      $scope.theacher = Theachers.query();
    };

    // Find existing Theacher
    $scope.findOne = function () {
      $scope.theacher = Theachers.get({
        theacherId: $stateParams.theacherId;
      });
    }; 
});