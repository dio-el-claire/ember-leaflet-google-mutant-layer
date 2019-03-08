'use strict';
const resolve = require('resolve');
const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: require('./package').name,

  treeForVendor() {
    let dist = this.pathBase('leaflet.gridlayer.googlemutant');

    return fastbootTransform(new Funnel(dist, {
      files: ['Leaflet.GoogleMutant.js'],
      destDir: 'leaflet.gridlayer.googlemutant'
    }));
  },

  included(app) {
    this._super.included.apply(this, arguments);

    // Addon options from the apps ember-cli-build.js
    let options = app.options[this.name] || {};

    // If the addon has the _findHost() method (in ember-cli >= 2.7.0), we'll just
    // use that.
    if (typeof this._findHost === 'function') {
      app = this._findHost();
    }

    // Otherwise, we'll use this implementation borrowed from the _findHost()
    // method in ember-cli.
    // Keep iterating upward until we don't have a grandparent.
    // Has to do this grandparent check because at some point we hit the project.
    let current = this;
    do {
     app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

    app.import('vendor/leaflet.gridlayer.googlemutant/Leaflet.GoogleMutant.js');
  },

  pathBase(packageName) {
    return path.dirname(resolve.sync(packageName + '/package.json', { basedir: __dirname }));
  },

  contentFor(type, config) {
    if (type === 'head') {
      var config = config.googleMutantLeaflet || {};
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
