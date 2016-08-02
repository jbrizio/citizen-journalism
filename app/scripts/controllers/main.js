(function () {
    'use strict';

    angular
        .module('citizenJournalismApp', ['ngMap'])
        .controller('MainCtrl', MainCtrl);

        MainCtrl.$inject = ['NgMap', '$scope', '$http', '$rootScope'];

        function MainCtrl(NgMap, $scope, $http, $rootScope) {
        	var vm = this,
				data = [];

        	NgMap.getMap().then(function(map) {
			    vm.map = map;
			});

		  	vm.showDetail = function(e, point) {
				$rootScope.marker = point;
				vm.map.showInfoWindow('info-window-data', point.id);
			};

		    $http.get('https://api.github.com/repos/jbrizio/citizen-journalism/issues')
				.then(function(response) {
					vm.data = response.data;
				});
        }
})();
