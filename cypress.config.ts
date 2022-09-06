import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'idy916',
  viewportWidth: 1400,
  viewportHeight: 860,
  env: {
    apiUrl: 'http://localhost:5000',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
