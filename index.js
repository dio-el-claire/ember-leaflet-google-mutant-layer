'use strict';
const path = require('path');
const resolve = require('resolve');
const Funnel = require('broccoli-funnel');
const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: require('./package').name,

  treeForVendor() {
    let dist = this.pathBase('leaflet.gridlayer.googlemutant');

    return fastbootTransform(new Funnel(dist, {
      files: ['Leaflet.GoogleMutant.js']
    }));
  },

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/Leaflet.GoogleMutant.js');
  },

  pathBase(packageName) {
    return path.dirname(resolve.sync(packageName + '/package.json', { basedir: __dirname }));
  },

  contentFor(type, config) {
    if (type === 'head') {
      config = config.googleMutantLeaflet || {};
      if (config.include !== false) {
        var params = [];
        if (config.apiKey) {
          params.push(`key=${config.apiKey}`);
        }
        if (config.libraries) {
          params.push('libraries=' + config.libraries.join(','));
        }
        if (config.client) {
          params.push(`client=${config.client}`);
        }
        if (config.v) {
          params.push(`v=${config.v}`);
        }
        return '<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js' + (params ? '?' + params.join('&') : '') + '"></script>';
      }
    }
  }
};
