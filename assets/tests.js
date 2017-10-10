define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _dummyTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/google-mutant-layer-test', ['exports', 'ember', 'ember-qunit', 'ember-leaflet-google-mutant-layer/components/google-mutant-layer'], function (exports, _ember, _emberQunit, _emberLeafletGoogleMutantLayerComponentsGoogleMutantLayer) {
  var run = _ember['default'].run;

  (0, _emberQunit.moduleForComponent)('google-mutant-layer', 'Integration | Component | google mutant layer', {
    integration: true,

    beforeEach: function beforeEach() {
      var module = this;

      this.register('component:google-mutant-layer', _emberLeafletGoogleMutantLayerComponentsGoogleMutantLayer['default'].extend({
        init: function init() {
          this._super.apply(this, arguments);
          module.googleMutant = this;
        }
      }));
    }
  });

  (0, _emberQunit.test)('map type is correctly set', function (assert) {
    var _this = this;

    var done = assert.async();

    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [['inline', 'google-mutant-layer', [], ['type', 'terrain'], ['loc', [null, [3, 6], [3, 44]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'leaflet-map', [], ['lat', 55.753445, 'lng', 37.620418, 'zoom', 10], 0, null, ['loc', [null, [2, 4], [4, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    run.next(function () {
      google.maps.event.addListenerOnce(_this.googleMutant._layer._mutant, 'idle', function () {
        done();
      });
      assert.equal(_this.googleMutant._layer._mutant.mapTypeId, 'terrain');
    });
  });

  (0, _emberQunit.test)('opacity', function (assert) {
    var _this2 = this;

    var done = assert.async();

    this.set('opacity', 0.7);

    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [['inline', 'google-mutant-layer', [], ['type', 'ROADMAP', 'opacity', ['subexpr', '@mut', [['get', 'opacity', ['loc', [null, [3, 51], [3, 58]]], 0, 0, 0, 0]], [], [], 0, 0]], ['loc', [null, [3, 6], [3, 60]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'leaflet-map', [], ['lat', 55.753445, 'lng', 37.620418, 'zoom', 10], 0, null, ['loc', [null, [2, 4], [4, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    run.next(function () {
      assert.equal(Math.round($('.leaflet-google-mutant').css('opacity') * 10) / 10, 0.7);
      _this2.set('opacity', 0.5);
      assert.equal(Math.round($('.leaflet-google-mutant').css('opacity') * 10) / 10, 0.5);

      google.maps.event.addListenerOnce(_this2.googleMutant._layer._mutant, 'idle', function () {
        done();
      });
    });
  });

  (0, _emberQunit.test)('sends action for load and spawned events', function (assert) {
    var _this3 = this;

    var done = assert.async();

    assert.expect(2);

    this.set('loadAction', function () {
      assert.ok(true, 'loading fired');
    });

    this.set('spawnedAction', function () {
      assert.ok(true, 'spawned fired');
    });

    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 6,
                'column': 4
              },
              'end': {
                'line': 8,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [['inline', 'google-mutant-layer', [], ['onSpawned', ['subexpr', 'action', [['get', 'loadAction', ['loc', [null, [7, 46], [7, 56]]], 0, 0, 0, 0]], [], ['loc', [null, [7, 38], [7, 57]]], 0, 0], 'onLoad', ['subexpr', 'action', [['get', 'loadAction', ['loc', [null, [7, 73], [7, 83]]], 0, 0, 0, 0]], [], ['loc', [null, [7, 65], [7, 84]]], 0, 0]], ['loc', [null, [7, 6], [7, 86]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 10,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('style');
          dom.setAttribute(el1, 'type', 'text/css');
          var el2 = dom.createTextNode('\n      .leaflet-container { height:500px; }\n    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('div');
          dom.setAttribute(el1, 'style', 'width:100%; height:500px; position:relative');
          var el2 = dom.createTextNode('\n');
          dom.appendChild(el1, el2);
          var el2 = dom.createComment('');
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode('    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [['block', 'leaflet-map', [], ['lat', 55.753445, 'lng', 37.620418, 'zoom', 10], 0, null, ['loc', [null, [6, 4], [8, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    run.next(function () {
      google.maps.event.addListenerOnce(_this3.googleMutant._layer._mutant, 'idle', function () {
        done();
      });
    });
  });

  (0, _emberQunit.test)('google layers', function (assert) {
    var _this4 = this;

    var done = assert.async();

    this.setProperties({
      isTrafficOn: true,
      isTransitOn: true,
      isBicyclingOn: true,
      isKmlOn: true,
      geoRSSOptions: { url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss' }
    });

    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 6,
                'column': 4
              },
              'end': {
                'line': 14,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [['inline', 'google-mutant-layer', [], ['isTrafficOn', ['subexpr', '@mut', [['get', 'isTrafficOn', ['loc', [null, [8, 20], [8, 31]]], 0, 0, 0, 0]], [], [], 0, 0], 'isTransitOn', ['subexpr', '@mut', [['get', 'isTransitOn', ['loc', [null, [9, 20], [9, 31]]], 0, 0, 0, 0]], [], [], 0, 0], 'isBicyclingOn', ['subexpr', '@mut', [['get', 'isBicyclingOn', ['loc', [null, [10, 22], [10, 35]]], 0, 0, 0, 0]], [], [], 0, 0], 'isKmlOn', ['subexpr', '@mut', [['get', 'isKmlOn', ['loc', [null, [11, 16], [11, 23]]], 0, 0, 0, 0]], [], [], 0, 0], 'KmlLayerOptions', ['subexpr', '@mut', [['get', 'geoRSSOptions', ['loc', [null, [12, 24], [12, 37]]], 0, 0, 0, 0]], [], [], 0, 0]], ['loc', [null, [7, 6], [13, 8]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 16,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('style');
          dom.setAttribute(el1, 'type', 'text/css');
          var el2 = dom.createTextNode('\n      .leaflet-container { height:500px; }\n    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('div');
          dom.setAttribute(el1, 'style', 'width:100%; height:500px; position:relative');
          var el2 = dom.createTextNode('\n');
          dom.appendChild(el1, el2);
          var el2 = dom.createComment('');
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode('    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [['block', 'leaflet-map', [], ['lat', 55.753445, 'lng', 37.620418, 'zoom', 10], 0, null, ['loc', [null, [6, 4], [14, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    run.next(function () {
      assert.ok(_this4.googleMutant._layer._subLayers.TrafficLayer, 'TrafficLayer');
      assert.ok(_this4.googleMutant._layer._subLayers.TransitLayer, 'TransitLayer');
      assert.ok(_this4.googleMutant._layer._subLayers.BicyclingLayer, 'BicyclingLayer');
      assert.ok(_this4.googleMutant._layer._subLayers.KmlLayer, 'KmlLayer');

      _this4.setProperties({
        isTrafficOn: false,
        isTransitOn: false,
        isBicyclingOn: false,
        isKmlOn: false
      });

      assert.notOk(_this4.googleMutant._layer._subLayers.TrafficLayer, 'TrafficLayer');
      assert.notOk(_this4.googleMutant._layer._subLayers.TransitLayer, 'TransitLayer');
      assert.notOk(_this4.googleMutant._layer._subLayers.BicyclingLayer, 'BicyclingLayer');
      assert.notOk(_this4.googleMutant._layer._subLayers.KmlLayer, 'KmlLayer');

      google.maps.event.addListenerOnce(_this4.googleMutant._layer._mutant, 'idle', function () {
        done();
      });
    });
  });
});
/* global google */
define('dummy/tests/integration/components/google-mutant-layer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/google-mutant-layer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/google-mutant-layer-test.js should pass jshint.');
  });
});
define('dummy/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
