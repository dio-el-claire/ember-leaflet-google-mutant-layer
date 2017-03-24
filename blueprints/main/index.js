/*jshint node:true*/
module.exports = {
  name: 'ember-leaflet-google-mutant-layer',
  description: 'Ember wrapper for Leaflet.GridLayer.GoogleMutant',

  afterInstall: function(options) {
    return this.addBowerPackageToProject('googlemutant', 'https://gitlab.com/luiscamacho/Leaflet.GridLayer.GoogleMutant.git#e934ab533c3c6797c8f8f17979960fb96dcac36d');
  }
};
