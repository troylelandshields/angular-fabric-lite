angular.module('common.fabric-lite.directive', [
	'common.fabric-lite.canvas'
])

.directive('fabric', ['$timeout', 'FabricCanvas', '$window', function($timeout, FabricCanvas, $window) {

	return {
		scope: {
			fabric: '='
		},
		controller: function($scope, $element) {
			FabricCanvas.setElement($element);
			FabricCanvas.createCanvas();
		}
	};

}]);
