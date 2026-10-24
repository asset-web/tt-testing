const cypress = require('cypress');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://transportation-transformation.co.uk',
    supportFile: 'cypress/support/e2e.js',
  },
});
