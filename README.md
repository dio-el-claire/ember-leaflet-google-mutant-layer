# Ember-leaflet-google-mutant-layer

Adds [Leaflet.GridLayer.GoogleMutant](https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant/tree/master) functionality into [Ember-Leaflet](http://ember-leaflet.com).
Also, addon supports google map layers (TrafficLayer, TransitLayer, BicyclingLayer, KmlLayer).

## Compatibility
* Leaflet.GridLayer.GoogleMutant plugin doesn't work on IE10 or lower, as that browser doesn't implement DOM mutation observers. Chrome, Firefox, Safari, IE11 and Edge are fine.
* IE11 and [browsers that don't support Promises](http://caniuse.com/#search=promise) need a polyfill in order to work. See example below.

Include the following before the script element that references the GoogleMutant javascript file.
```javascript
<script src="https://unpkg.com/es6-promise@4.0.5/dist/es6-promise.min.js"></script>
<script>ES6Promise.polyfill();</script>

```
This will polyfill in Javascript Promises for IE.

## Installation

```bash
ember install ember-leaflet-google-mutant-layer
```

Google's javascript library will be automatically referenced inside `<head>`. To use your API key, specify it in your application configuration in `config/environment.js`:

```javascript
var ENV = {
  // ...
  googleMutantLeaflet: {
    apiKey: 'API-KEY-HERE'
  },
  // ...
};
```

You may specify required google libraries:
```javascript
var ENV = {
  // ...
  googleMutantLeaflet: {
    libraries: ['geometry', ....]
  },
  // ...
};
```

If for some reason you want to prevent this addon from adding the script tag (e.g another library already does it), just specify:

```javascript
var ENV = {
  // ...
  googleMutantLeaflet: {
    include: false
  },
  // ...
};
```

## Usage
```handlebars
<LeafletMap @lat={{this.lat}} @lng={{this.lng}} @zoom={{this.zoom}} as |layers|>

  <layers.google-mutant @type="roadmap" @isTrafficOn={{true}}/>

</LeafletMap>
```

### Options

* `type` google map type id, default `roadmap`
* `isTrafficOn` show traffic layer, default `false`
* `isTransitOn` show transit layer, default `false`
* `isBicyclingOn` show bicycling layer, default `false`
* `isKmlOn` show KmlLayer (geo rss) layer, default `false`
* `kmlLayerOptions` hash with KmlLayer options (url)
* `opacity` map opacity, default `1`
* `maxZoom` default `18`
* `maxNativeZoom` default `21`
* `minZoom` default `0`
* `continuousWorld` default `false`
* `noWrap` default `false`
* `styles` [custom map styling](https://developers.google.com/maps/documentation/javascript/styling)

### Content Security Policy

Google Maps uses many resources from Google's servers, so the URLs to them have to be white listed. You can set this by adding to the Content Security Policy defined in `config/environment.js` like so:

```js
ENV.contentSecurityPolicy = {
  'default-src': "'none'",
  'script-src': "'self' 'unsafe-eval' *.googleapis.com",
  'font-src': "'self' fonts.gstatic.com",
  'img-src': "'self' data: *.googleapis.com maps.gstatic.com *.gstatic.com",
  'style-src': "'self' 'unsafe-inline' *.googleapis.com"
},
```

You can find out more information on the CSP addon page [here](https://github.com/rwjblue/ember-cli-content-security-policy#ember-cli-content-security-policy).

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
