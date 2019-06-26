/*!
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
/*global describe, it*/
const config = require('../../config.json');
const chai = require('chai');
const {expect} = chai;
const util = require('./util');

// configure chai
const should = chai.should();
chai.use(require('chai-as-promised'));

const generatorOptions = config;

// https://w3c.github.io/vc-data-model/#terms-of-use
describe('Terms of Use (optional)', function() {

  before(function() {
    const notSupported = generatorOptions.sectionsNotSupported || [];
    if(notSupported.includes('tou')) {
      this.skip();
    }
  });

  it.skip('MUST support prohibiting Archival', async function() {
  });

  it.skip('MUST support prohibiting non-subject Presentation', async function() {
  });

  it.skip('MUST support prohibiting 3rd Party Correlation', async function() {
  });

});
