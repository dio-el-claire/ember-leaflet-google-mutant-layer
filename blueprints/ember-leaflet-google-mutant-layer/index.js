/*jshint node:true*/
module.exports = {
  name: 'ember-leaflet-google-mutant-layer',
  description: 'Ember wrapper for Leaflet.GridLayer.GoogleMutant',

  normalizeEntityName: function() {
   // this prevents an error when the entityName is
   // not specified (since that doesn't actually matter
   // to us
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('googlemutant', 'https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant.git');
  }
};
