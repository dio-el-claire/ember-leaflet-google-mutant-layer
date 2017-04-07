import Ember from 'ember';

export default Ember.Controller.extend({
	zoom: 10,

	lat: 34.04924594193164,

	lng: -118.24104309082031,

	trafficLayer: false,

	transitLayer: false,

	bicycleLayer: false,

	geoRSSLayer: false,

	geoRSSOptions: {
		url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss'
	},

  actions: {
  	toggleTraffic() {
  		this.toggleProperty('trafficLayer');
  	},

  	toggleTransit() {
  		
  		if (!this.get('transitLayer')) {
  			this.setProperties({lat: 51.501904, lng: -0.115871, zoom: 13});
  		}
  		this.toggleProperty('transitLayer');
  	},

  	toggleBicycle() {
  		if (!this.get('bicycleLayer')) {
				this.setProperties({
					lat:42.3726399,
					lng: -71.1096528,
					zoom: 14
				});
  		}
  		this.toggleProperty('bicycleLayer');
  	},

  	toggleRSS() {
  		if (!this.get('geoRSSLayer')) {
				this.setProperties({
					lat: 49.496675, 
					lng: -102.65625,
					zoom: 4
				});

  		}
	   	this.toggleProperty('geoRSSLayer');
  	}

  }
});
