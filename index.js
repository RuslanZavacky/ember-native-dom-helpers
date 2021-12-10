/* eslint-env node */
'use strict';

const cacheKeyForTree = require('calculate-cache-key-for-tree');

module.exports = {
  name: 'ember-native-dom-helpers',

  treeForAddonTestSupport(tree) {
    // intentionally not calling _super here
    // so that can have our `import`'s be
    // import { click, fillIn } from 'ember-native-dom-helpers';

    const Funnel = require('broccoli-funnel');

    let namespacedTree = new Funnel(tree, {
      srcDir: '/',
      destDir: `/${this.moduleName()}`,
      annotation: `Addon#treeForTestSupport (${this.name})`,
    });

    return this.preprocessJs(namespacedTree, '/', this.name, {
      registry: this.registry,
    });
  },

  cacheKeyForTree(treeType) {
    return cacheKeyForTree(treeType, this);
  },
};
