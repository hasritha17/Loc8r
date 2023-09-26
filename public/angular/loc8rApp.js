angular.module('loc8rApp',[]);
var locationListCtrl = function ($scope) {
    $scope.data = {
    locations: [{
        name: 'Amaravathi',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '100m',
        href: '/location'
    }, {
        name: 'Gismat',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 4,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '200m',
        href: '/location2'
    }, {
        name: 'Tree Stories Cafe',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 2,
        facilities: ['Food', 'Premium wifi'],
        distance: '250m',
        href: '/location3'
    }]};
    $scope.getLocationURL = function(index) {
        if (index === 0) {
            return '/location';
        } else {
            return '/location' + (index + 1);
        }
    };    
};

angular
    .module('loc8rApp')
    .controller('locationListCtrl', locationListCtrl)
