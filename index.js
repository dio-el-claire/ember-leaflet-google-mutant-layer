/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-leaflet-google-mutant-layer',

  included(app, parentAddon) {
  	var target = (parentAddon || app);
  	this._super.included(target);
  	// console.log('================================', this.project.root +  '/node_modules/leaflet.gridLayer.googlemutant/Leaflet.GoogleMutant.js')
  	target.import('/Users/dio/SItes/ember-leaflet-google-mutant-layer/node_modules/leaflet.gridlayer.googlemutant/Leaflet.GoogleMutant.js');
  },

  contentFor: function(type, config) {
  	if (type === 'head') {
  		var config = config.googleMutantLeaflet || {};
  		if (config.include !== false) {
  			var params = [];
  			if (config.apiKey) {
  				params.push(`key=${config.apiKey}`);
  			}
  			if (config.apiLibraries) {
  				params.push('libraries=' + config.apiLibraries.join(','));
  			}
  			return '<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js' + (params ? '?' + params.join('&') : '') + '"></script>';
  		}
  	}
  }
};
