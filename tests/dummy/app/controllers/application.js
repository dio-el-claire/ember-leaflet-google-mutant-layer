import Controller from '@ember/controller';

export default Controller.extend({
	zoom: 10,

	lat: 34.04924594193164,

	lng: -118.24104309082031,

	isTrafficOn: false,

	isTransitOn: false,

	isBicyclingOn: false,

	isKmlOn: false,

  geoRSSOptions: Object.freeze({
    url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss'
  }),

  actions: {
    toggleTraffic() {
      this.toggleProperty('isTrafficOn');
    },

    toggleTransit() {

      if (!this.get('isTransitOn')) {
        this.setProperties({lat: 51.501904, lng: -0.115871, zoom: 13});
      }
      this.toggleProperty('isTransitOn');
    },

    toggleBicycle() {
      if (!this.get('isBicyclingOn')) {
        this.setProperties({
          lat:42.3726399,
          lng: -71.1096528,
          zoom: 14
        });
      }
      this.toggleProperty('isBicyclingOn');
    },

    toggleRSS() {
      if (!this.get('isKmlOn')) {
        this.setProperties({
          lat: 49.496675,
          lng: -102.65625,
          zoom: 4
        });

      }
      this.toggleProperty('isKmlOn');
    }

  }
});
