angular.module('common.fabric-lite.canvas', [
	'common.fabric-lite.window'
])

.factory('FabricCanvas', ['FabricWindow', '$rootScope', function(FabricWindow, $rootScope) {

	var self = {
		canvasId: null,
		element: null,
		canvas: null
	};

	function createId() {
		return Math.floor(Math.random() * 10000);
	}

	self.setElement = function(element) {
		self.element = element;
		$rootScope.$broadcast('canvas:element:selected');
	};

	self.createCanvas = function() {
		self.canvasId = 'fabric-canvas-' + createId();
		self.element.attr('id', self.canvasId);
    if(self.element.attr('static')){
      self.canvas = new FabricWindow.StaticCanvas(self.canvasId);
    }
    else {
		  self.canvas = new FabricWindow.Canvas(self.canvasId);
    }
		$rootScope.$broadcast('canvas:created', {name: self.element.attr("name"), canvas: self});

		return self.canvas;
	};

	self.getCanvas = function() {
		return self.canvas;
	};

	self.getCanvasId = function() {
		return self.canvasId;
	};

	return self;

}]);
