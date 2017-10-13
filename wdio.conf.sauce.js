const defaults = require('./wdio.conf.js').config;
const _ = require('lodash');

const overrides = {
  services: ['sauce'],
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  sauceConnect: true,
  host: 'ondemand.saucelabs.com',
  logLevel: 'silent',

  capabilities: [
    {
      browserName: 'MicrosoftEdge',
      version: '15.15063',
      platform: 'Windows 10',
      name: 'Edge Win10: test flight search',
      screenResolution: '1280x960',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER
    },
    //{
    // browserName: 'safari',
    // version: '10.0',
    // platform: 'macOS 10.12',
    // name: 'Safari OSX: test flight search',
    // screenResolution: '1280x960',
    // },
    {
      browserName: 'firefox',
      version: '45.0',
      platform: 'Linux',
      name: 'Firefox Linux: test flight search',
      screenResolution: '1024x768',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER
    },
    {
      browserName: 'firefox',
      version: '56.0',
      platform: 'macOS 10.12',
      name: 'Firefox OSX: test flight search',
      screenResolution: '1280x960',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER
    },
    {
      browserName: 'chrome',
      version: '61.0',
      platform: 'macOS 10.12',
      name: 'Chrome OSX: test flight search',
      screenResolution: '1280x960',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER
    },
    {
      browserName: 'chrome',
      version: '61.0',
      platform: 'Windows 10',
      name: 'Chrome Win10: test flight search',
      screenResolution: '1280x960',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      build: process.env.TRAVIS_BUILD_NUMBER
    },
  ],
};

// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults);
