import angular from 'angular';
import 'angular-ui-router';
import 'angular-bootstrap-npm';

import portfolioDirective from './components/portfolio/portfolio.directive.js';
import Router from './routes.js';
import './sass/style.scss';

angular.module('akyunaAkish', [
        'ui.router',
        'ui.bootstrap'
    ])
    .directive('portfolioDirective', portfolioDirective)
    .config(Router);
