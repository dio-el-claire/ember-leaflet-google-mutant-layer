// addon/instance-initializers/register-component.js
export function initialize(appInstance) {
  // first we lookup the ember leaflet service
  let emberLeafletService = appInstance.lookup('service:ember-leaflet');

  // to support older versions of ember-leaflet that do not include the service, we add a guard here
  if (emberLeafletService) {
    // we then invoke the `registerComponent` method
    emberLeafletService.registerComponent('google-mutant-layer', { as: 'google-mutant' });
  }
}

export default {
  initialize
};
