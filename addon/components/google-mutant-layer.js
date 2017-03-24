import BaseLayer from 'ember-leaflet/components/base-layer';

export default BaseLayer.extend({

  leafletRequiredOptions: [
    'type' // Possible types: SATELLITE, ROADMAP, TERRAIN
  ],

  leafletOptions: [
    'mapOptions', 'attribution', 'opacity', 'maxZoom'
  ],

  leafletEvents: [
    'load', 'spawned'
  ],

  leafletProperties: [
    'opacity'
  ],

  trafficLayer : new google.maps.TrafficLayer(),

  isTrafficOn: false,

  toggleTraffic: Ember.observer('isTrafficOn', function() {
  	this.get('trafficLayer').setMap(this.get('isTrafficOn') ? this._layer._mutant : null); 
  }),

  createLayer() {
    return new this.L.GridLayer.GoogleMutant(...this.get('requiredOptions'), this.get('options'));
  }

});
