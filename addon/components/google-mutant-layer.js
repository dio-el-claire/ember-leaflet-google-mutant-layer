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

  trafficLayer : new window.google.maps.TrafficLayer(),

  isTrafficOn: false,

  toggleTraffic: observer('isTrafficOn', function() {
  	this.get('trafficLayer').setMap(this.get('isTrafficOn') ? this._layer._mutant : null); 
  }),

  createLayer() { 
    var options = this.get('options');
    options.type = options.type.toLowerCase();
    return  this.L.gridLayer.googleMutant(options);
  }

});
