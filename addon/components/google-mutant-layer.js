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

  _spawned(e) { console.log('_spawned')
  	this._googleMap = e.mapObject;
  	// this.get('trafficLayer').setMap(this._googleMap)
  },

  // _load() {
  // 	console.log('load')
  // 	Ember.run.later(() => { console.log('HERE')
  // 	  this.get('trafficLayer').setMap(this._googleMap) 
  // 	}, 1000)
  // },

  toggleTraffic: Ember.observer('isTrafficOn', function() { console.log(this.get('isTrafficOn'))
  	this.get('trafficLayer').setMap(this.get('isTrafficOn') ? this._googleMap : null); 
  }),

  createLayer() {
    return new this.L.GridLayer.GoogleMutant(...this.get('requiredOptions'), this.get('options'));
  }

});
