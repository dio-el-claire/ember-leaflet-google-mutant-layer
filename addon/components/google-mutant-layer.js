import Ember from 'ember';
import BaseLayer from 'ember-leaflet/components/base-layer';

const { observer } = Ember;

export default BaseLayer.extend({

  type: 'roadmap',  // Possible types: sattelite, roadmap, terrain. hybrid is not really supported

  leafletRequiredOptions: ['type'],

  leafletOptions: [
    'attribution', 'opacity', 'maxZoom', 'minZoom', 'maxNativeZoom', 'continuousWorld', 'noWrap', 'styles', 'type'
  ],

  leafletEvents: [
    'load', 'spawned'
  ],

  leafletProperties: ['opacity'],

  TrafficLayer: false,

  TransitLayer: false,

  BicyclingLayer: false,

  KmlLayer: false,

  toggleTraffic: observer('TrafficLayer', function() {
    this.updateGoogleLayer('TrafficLayer');
  }),

  toggleTransit: observer('TransitLayer', function () {
    this.updateGoogleLayer('TransitLayer');
  }),

  toggleBicycling: observer('BicyclingLayer', function () {
    this.updateGoogleLayer('BicyclingLayer');
  }),

  toggleKml: observer('KmlLayer', function () {
    this.updateGoogleLayer('KmlLayer', this.get('KmlLayerOptions'));
  }),

  updateGoogleLayer(layer, options) {
    this._layer[this.get(layer) ? 'addGoogleLayer' : 'removeGoogleLayer'](layer, options);
  },

  _spawned() {
    this.toggleTraffic();
    this.toggleTransit();
    this.toggleBicycling();
    this.toggleKml();
  },

  createLayer() { 
    var options = this.get('options');
    options.type = options.type.toLowerCase();
    return  this.L.gridLayer.googleMutant(options);
  }

});
