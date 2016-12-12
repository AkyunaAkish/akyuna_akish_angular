import controller from './portfolio.controller.js';

export default () => {
  return {
    template: require('./portfolio.html'),
    controller,
    restrict: 'E',
    controllerAs: 'vm',
    scope: {},
    bindToController: true
  };
};
