import controller from './details.controller.js';

export default () => {
  return {
    template: require('./details.html'),
    controller,
    restrict: 'E',
    controllerAs: 'vm',
    scope: {},
    bindToController: true
  };
};
