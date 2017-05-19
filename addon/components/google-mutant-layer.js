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

  isTrafficOn: false,

  isTransitOn: false,

  isBicyclingOn: false,

  isKmlOn: false,

  toggleTraffic: observer('isTrafficOn', function() {
    this.updateGoogleLayer('TrafficLayer', this.get('isTrafficOn'));
  }),

  toggleTransit: observer('isTransitOn', function () {
    this.updateGoogleLayer('TransitLayer', this.get('isTransitOn'));
  }),

  toggleBicycling: observer('isBicyclingOn', function () {
    this.updateGoogleLayer('BicyclingLayer', this.get('isBicyclingOn'));
  }),

  toggleKml: observer('isKmlOn', function () {
    this.updateGoogleLayer('KmlLayer', this.get('isKmlOn'), this.get('kmlLayerOptions'));
  }),

  updateGoogleLayer(layer, show, options) {
    this._layer[show ? 'addGoogleLayer' : 'removeGoogleLayer'](layer, options);
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
