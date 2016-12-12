export default (['$stateProvider', '$urlRouterProvider', '$locationProvider',
    ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
            .state('portfolio', {
                url: '/',
                template: '<portfolio-directive></portfolio-directive>'
            })
            .state('other', {
                url: '/p',
                template: '<portfolio-directive></portfolio-directive>'
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
]);
