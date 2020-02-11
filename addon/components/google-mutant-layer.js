import { observer } from '@ember/object';
import BaseLayer from 'ember-leaflet/components/base-layer';

export default BaseLayer.extend({

  type: 'roadmap',  // Possible types: sattelite, roadmap, terrain. hybrid is not really supported

  leafletRequiredOptions: Object.freeze(['type']),

  leafletOptions: Object.freeze([
    'attribution', 'opacity', 'maxZoom', 'minZoom', 'maxNativeZoom', 'continuousWorld', 'noWrap', 'styles', 'type'
  ]),

  leafletEvents: Object.freeze([
    'load', 'spawned'
  ]),

  leafletProperties: Object.freeze(['opacity']),

  isTrafficOn: false,

  isTransitOn: false,

  isBicyclingOn: false,

  isKmlOn: false,

  // eslint-disable-next-line ember/no-observers
  toggleTraffic: observer('isTrafficOn', function() {
    this.updateGoogleLayer('TrafficLayer', this.get('isTrafficOn'));
  }),

  // eslint-disable-next-line ember/no-observers
  toggleTransit: observer('isTransitOn', function () {
    this.updateGoogleLayer('TransitLayer', this.get('isTransitOn'));
  }),

  // eslint-disable-next-line ember/no-observers
  toggleBicycling: observer('isBicyclingOn', function () {
    this.updateGoogleLayer('BicyclingLayer', this.get('isBicyclingOn'));
  }),

  // eslint-disable-next-line ember/no-observers
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
