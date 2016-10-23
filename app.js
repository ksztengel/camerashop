const app = angular.module('angApp',[])

app.controller('mainController', ['$scope', function($scope){
  $scope.cameraArray =
  [{
    title: 'Nikon D3100 DSLR',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    rating: 3.4,
    price: 369.99,
    onSale: true
  },
  {
    title: 'Canon EOS 70D',
    image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
    rating: 2.0,
    price: 1099.0,
    onSale: false
  },
  {
    title: 'Nikon D810A',
    image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
    rating: 4.2,
    price: 3796.95,
    onSale: true
  }]

  $scope.totalCost = 0;
  $scope.currentItems = [];

  // "private" data, cannot be accessed by the view.
  var taxRate = .18;

  // "public" function, can be accessed from the view.
  $scope.addItem = function (camera) {
    $scope.currentItems.push(camera);
    updatePrice();
  }

  // "private" function, cannot be accessed by the view.
  function updatePrice() {
    var sum = 0;
    for(var i = 0; i < $scope.currentItems.length; i++) {
      sum += $scope.currentItems[i].price;
    }

    $scope.totalCost = sum + (sum * taxRate);
      $scope.totalCost = Math.floor($scope.totalCost);
      console.log($scope.totalCost);
  }
}])
