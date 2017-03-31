import Ember from 'ember';

export default Ember.Controller.extend({
	isTrafficOn: false,

  actions: {
  	toggleTraffic() {
  		this.toggleProperty('isTrafficOn');
  	}

  }
});
