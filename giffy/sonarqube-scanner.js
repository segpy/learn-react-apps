import scanner from 'sonarqube-scanner'
scanner(
  {
    serverUrl: 'http://localhost:9000',
    token: 'sqa_b0cb6445c659cd1a9efc6bbccf8ae63600a7a2f6',
    options: {
      'sonar.sources': './src',
      // 'sonar.exclusions': '**/*.test.jsx',
      // 'sonar.tests': './src',
      // 'sonar.test.inclusions': '**/*.test.jsx,**/*.test.js',
      'sonar.exclusions': '**/__test__/**',
      'sonar.tests': './src/__test__',
      'sonar.test.inclusions': './src/__test__/**/*.test.jsx,./src/__test__/**/*.test.js',
      'sonar.javascript.lcov.reportPaths': './coverage/lcov.info',
      //   'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'sonar-report.xml'
    }
  },
  () => process.exit()
)
