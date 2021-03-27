# books-ui-E2E
Repository to test books-ui

Steps to execute the test in watch mode:
- `git clone https://github.com/kliver98/books-ui-E2E`
- `cd books-ui-E2E`
- `npm i`
- `npm run test:e2e:ui`
- Select the test that you want to run

Steps to execute the test in headless mode:
- `git clone https://github.com/kliver98/books-ui-E2E`
- `cd books-ui-E2E`
- `npm i`
- `npm run test:e2e:ui:headless`

To be aware of some assertions and annotations I made in this exercise, please read READ.txt

## How does workflow work to Continuous Deployment?:
1. Developer code on main repository https://github.com/kliver98/books-ui creating a branch from qa-staging
> If they make a PR from their braches to qa-staging, then code will be deployed in qa-staging [https://books2testing-qa.herokuapp.com]
2. E2E test are coded in test repository https://github.com/kliver98/books-ui-e2e in a new brach, different from main
> When tests are done in test repository, tester make a PR to main branch in test repository
> If tests pass, then a dispatch event will be send to https://github.com/kliver98/books-ui for merge qa-staging branch and main
3. And it's done :) Now changes with their approved tests will be deployed in production [https://books2testing.herokuapp.com]