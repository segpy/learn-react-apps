import scanner from 'sonarqube-scanner'
scanner(
  {
    serverUrl: 'http://localhost:9000',
    token: 'sqa_536c32fc9be4683e2f651e5f305f420151c3cd9d',
    options: {
      // Basic settings
      'sonar.sources': './src',
      // To exclude some files from analysis
      'sonar.exclusions': 'src/**/*.{ts,tsx,!(*.test.tsx|*.test.ts)}',

      // Test settings
      'sonar.tests': './src',
      'sonar.test.inclusions': '**/*.test.tsx,**/*.test.ts',
      'sonar.javascript.lcov.reportPaths': './coverage/lcov.info',
      'sonar.typescript.lcov.reportPaths': './coverage/lcov.info'
      // 'sonar.testExecutionReportPaths': 'sonar-report.xml'
    }
  },
  () => process.exit()
)
