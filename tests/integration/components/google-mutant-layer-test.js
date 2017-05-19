/* global google */
import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import GoogleMutantLayer from 'ember-leaflet-google-mutant-layer/components/google-mutant-layer';
import hbs from 'htmlbars-inline-precompile';

const { run } = Ember;

moduleForComponent('google-mutant-layer', 'Integration | Component | google mutant layer', {
  integration: true,

  beforeEach() {
    var module = this;

    this.register('component:google-mutant-layer', GoogleMutantLayer.extend({
      init() {
        this._super(...arguments);
        module.googleMutant = this;
      }
    }));
  }
});

test('map type is correctly set', function(assert) {
  const done = assert.async();

  this.render(hbs`
    {{#leaflet-map lat=55.753445 lng=37.620418 zoom=10}}
      {{google-mutant-layer type="terrain"}}
    {{/leaflet-map}}
  `);

  run.next(() => { 
    google.maps.event.addListenerOnce(this.googleMutant._layer._mutant, 'idle', () => {
      done();  
    });
    assert.equal(this.googleMutant._layer._mutant.mapTypeId, 'terrain');
  });

});


test('opacity', function (assert) {
  const done = assert.async();

  this.set('opacity', 0.7);

  this.render(hbs`
    {{#leaflet-map lat=55.753445 lng=37.620418 zoom=10}}
      {{google-mutant-layer type="ROADMAP" opacity=opacity}}
    {{/leaflet-map}}
  `);



  run.next(() => { 
    assert.equal(Math.round($('.leaflet-google-mutant').css('opacity')*10)/10, 0.7);
    this.set('opacity', 0.5);
    assert.equal(Math.round($('.leaflet-google-mutant').css('opacity')*10)/10, 0.5); 

    google.maps.event.addListenerOnce(this.googleMutant._layer._mutant, 'idle', () => {
      done();  
    });
  });
});

test('sends action for load and spawned events', function (assert) {
  const done = assert.async();

  assert.expect(2);

  this.set('loadAction', () => {
    assert.ok(true, 'loading fired');
  });

  this.set('spawnedAction', () => {
    assert.ok(true, 'spawned fired');
  });

  this.render(hbs`
    <style type="text/css">
      .leaflet-container { height:500px; }
    </style>
    <div style="width:100%; height:500px; position:relative">
    {{#leaflet-map lat=55.753445 lng=37.620418 zoom=10}}
      {{google-mutant-layer onSpawned=(action loadAction) onLoad=(action loadAction)}}
    {{/leaflet-map}}
    </div>
  `);

  run.next(() => { 
    google.maps.event.addListenerOnce(this.googleMutant._layer._mutant, 'idle', () => {
      done();  
    });
  });
});

test('google layers', function (assert) {
  const done = assert.async();

  this.setProperties({
    isTrafficOn: true,
    isTransitOn: true,
    isBicyclingOn: true,
    isKmlOn: true,
    geoRSSOptions: { url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss' }
  });

  this.render(hbs`
    <style type="text/css">
      .leaflet-container { height:500px; }
    </style>
    <div style="width:100%; height:500px; position:relative">
    {{#leaflet-map lat=55.753445 lng=37.620418 zoom=10}}
      {{google-mutant-layer 
        isTrafficOn=isTrafficOn
        isTransitOn=isTransitOn
        isBicyclingOn=isBicyclingOn
        isKmlOn=isKmlOn
        KmlLayerOptions=geoRSSOptions
      }}
    {{/leaflet-map}}
    </div>
  `);

  run.next(() => { 
    assert.ok(this.googleMutant._layer._subLayers.TrafficLayer, 'TrafficLayer');
    assert.ok(this.googleMutant._layer._subLayers.TransitLayer, 'TransitLayer');
    assert.ok(this.googleMutant._layer._subLayers.BicyclingLayer, 'BicyclingLayer');
    assert.ok(this.googleMutant._layer._subLayers.KmlLayer, 'KmlLayer');

    this.setProperties({
      isTrafficOn: false,
      isTransitOn: false,
      isBicyclingOn: false,
      isKmlOn: false,
    });
    
    assert.notOk(this.googleMutant._layer._subLayers.TrafficLayer, 'TrafficLayer');
    assert.notOk(this.googleMutant._layer._subLayers.TransitLayer, 'TransitLayer');
    assert.notOk(this.googleMutant._layer._subLayers.BicyclingLayer, 'BicyclingLayer');
    assert.notOk(this.googleMutant._layer._subLayers.KmlLayer, 'KmlLayer');
    
    google.maps.event.addListenerOnce(this.googleMutant._layer._mutant, 'idle', () => {
      done();  
    });
  });

});

