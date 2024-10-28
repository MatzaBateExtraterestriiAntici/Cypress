const fs = require('fs');

// Access parameters
const path = process.argv[2] || './tests/reports/mochawesome.json'; // Path to the file

// Read and parse the Mochawesome JSON report
fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    process.exit(1);
  }

  const report = JSON.parse(data);

  // Extract test summary data from the JSON report
  const suitesTested = report.stats.tests || 0;
  const totalTests = report.stats.tests || 0;
  const passedTests = report.stats.passes || 0;
  const failedTests = report.stats.failures || 0;
  const pendingTests = report.stats.pending || 0;
  const passedPercentage = report.stats.passPercent || 0;
  const duration = (report.stats.duration / 1000).toFixed(2) + ' seconds';

  // Format the summary as Markdown
  const summaryMarkdown = `
### Cypress Test Summary
- **Suites Tested**: ${suitesTested}
- **Total Tests**: ${totalTests}
- **Passed**: ${passedTests}
- **Failed**: ${failedTests}
- **Pending**: ${pendingTests}
- **Pass %**: ${passedPercentage}
- **Duration**: ${duration}
  `;

  // Write summary to GitHub Actions Summary
  fs.appendFile(process.env.GITHUB_STEP_SUMMARY, summaryMarkdown, (err) => {
    if (err) {
      console.error('Error writing to GitHub Actions Summary:', err);
      process.exit(1);
    }
    console.log('Test summary added to GitHub Actions summary');
  });
});
