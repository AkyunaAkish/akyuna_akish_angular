import angular from 'angular';
import 'angular-ui-router';
import 'angular-bootstrap-npm';

import navbarDirective from './components/navbar/navbar.directive.js';
import portfolioDirective from './components/portfolio/portfolio.directive.js';
import Router from './routes.js';
import './sass/style.scss';

angular.module('akyunaAkish', [
        'ui.router',
        'ui.bootstrap'
    ])
    .directive('navbarDirective', navbarDirective)
    .directive('portfolioDirective', portfolioDirective)
    .config(Router);
