const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Custom folder for end-to-end tests
    specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    
    // Other E2E-specific options
    supportFile: false, // For the moment no support file is required
    // fixturesFolder: 'tests/fixtures', // Path to fixtures (mock data files)
    screenshotsFolder: 'tests/screenshots', // Where screenshots are saved
    videosFolder: 'tests/videos',        // Where videos are saved

    // Browser and viewport settings
    viewportWidth: 1600,
    viewportHeight: 900,

    // Timeout settings
    defaultCommandTimeout: 10000, // Default command timeout in ms
    pageLoadTimeout: 30000, // Default page load timeout in ms

    // REPORTING options
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'tests/reports',  // Directory for the report files
      overwrite: false,
      html: true,
      json: true,
    },
  },
  // GENERAL CYPRESS settings
  video: true, // Enable video recording of tests
  screenshotOnRunFailure: true, // Take a screenshot on test failure
  watchForFileChanges: false, // Cypress automatically re-runs tests on file changes
  retries: {
    runMode: 2, // Retry tests in CI
    openMode: 0, // No retries in local mode
  },
  env: {
    baseTestSiteUrl: 'http://daguno.rf.gd', // Base test site URL value
  },
});
