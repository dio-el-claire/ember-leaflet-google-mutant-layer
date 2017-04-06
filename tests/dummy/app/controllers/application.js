import Ember from 'ember';

export default Ember.Controller.extend({
	isTrafficOn: true,

  actions: {
  	toggleTraffic() {
  		this.toggleProperty('isTrafficOn');
  	}

  }
});
