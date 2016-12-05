'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('historique service', function() {
  it('registered the historiques service', () => {
    assert.ok(app.service('historiques'));
  });
});
