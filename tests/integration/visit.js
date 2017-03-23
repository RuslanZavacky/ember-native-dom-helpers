import { moduleForComponent, test } from 'ember-qunit';
import { visit } from 'ember-native-dom-helpers/test-support/helpers';

moduleForComponent('fillIn', 'Integration | Test Helper | visit', {
  integration: true
});

test('It raises an error in integration', function(assert) {
  assert.throws(function() {
    visit('/somewhere');
  }, 'visit is only available during acceptance tests');
});
