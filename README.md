## Running Tests

Create React App uses [Jest](https://facebook.github.io/jest/) as its test runner. 


Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

### Command Line Interface

When you run `npm test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `npm start` recompiles the code.

`npm test -- --coverage` will run tests with coverage.

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs. You can learn the commands from the “Watch Usage” note that the watcher prints after every run:

### Version Control Integration

By default, when you run `npm test`, Jest will only run the tests related to files changed since the last commit. This is an optimization designed to make your tests runs fast regardless of how many tests you have. However it assumes that you don’t often commit the code that doesn’t pass the tests.

Jest will always explicitly mention that it only ran tests related to the files changed since the last commit. You can also press `a` in the watch mode to force Jest to run all tests.

Jest will always run all tests on a [continuous integration](#continuous-integration) server or if the project is not inside a Git or Mercurial repository.

### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

All `expect()` matchers supported by Jest are [extensively documented here](http://facebook.github.io/jest/docs/expect.html).<br>
You can also use [`jest.fn()` and `expect(fn).toBeCalled()`](http://facebook.github.io/jest/docs/expect.html#tohavebeencalled) to create “spies” or mock functions.

### Testing Components

There is a broad spectrum of component testing techniques. They range from a “smoke test” verifying that a component renders without throwing, to shallow rendering and testing some of the output, to full rendering and testing component lifecycle and state changes.

Different projects choose different testing tradeoffs based on how often components change, and how much logic they contain. If you haven’t decided on a testing strategy yet, we recommend that you start with creating simple smoke tests for your components:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

This test mounts a component and makes sure that it didn’t throw during rendering. Tests like this provide a lot value with very little effort so they are great as a starting point, and this is the test you will find in `src/App.test.js`.

When you encounter bugs caused by changing components, you will gain a deeper insight into which parts of them are worth testing in your application. This might be a good time to introduce more specific tests asserting specific expected output or behavior.

If you’d like to test components in isolation from the child components they render, we recommend using [`shallow()` rendering API](http://airbnb.io/enzyme/docs/api/shallow.html) from [Enzyme](http://airbnb.io/enzyme/). You can write a smoke test with it too:

```sh
npm install --save-dev enzyme react-test-renderer
```

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
```

Unlike the previous smoke test using `ReactDOM.render()`, this test only renders `<App>` and doesn’t go deeper. For example, even if `<App>` itself renders a `<Button>` that throws, this test will pass. Shallow rendering is great for isolated unit tests, but you may still want to create some full rendering tests to ensure the components integrate correctly. Enzyme supports [full rendering with `mount()`](http://airbnb.io/enzyme/docs/api/mount.html), and you can also use it for testing state changes and component lifecycle.

You can read the [Enzyme documentation](http://airbnb.io/enzyme/) for more testing techniques. Enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because Jest provides built-in `expect()` and `jest.fn()` for spies.

Here is an example from Enzyme documentation that asserts specific output, rewritten to use Jest matchers:

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
```

All Jest matchers are [extensively documented here](http://facebook.github.io/jest/docs/expect.html).<br>
Nevertheless you can use a third-party assertion library like [Chai](http://chaijs.com/) if you want to.

### Unit Testing

```js
it('should calculate right', () => {
    expect(2+2).toBe(4);
    expect(2+2).toBeGreaterThan(3);
    expect(2+2).toBeLessThan(5);
  });
```

### Snapshot Testing

Lets create snapshot for header component
```typescript
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Header } from '../Header';

describe('Header Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Header title="a"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```
`npm test`
In command line we see that one snapshot is added.
```
Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
Snapshots:   1 added, 1 total
```

Snapshot looks like:
```
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Header Component renders correctly 1`] = `
<div
  className="App-header"
>
  <h1>
    a
  </h1>
  <h3>
    optional sub title
  </h3>
</div>
`;
```

###TDD

Lets assume that we want to validate input our form. So we need to create 
function that returns `boolean` true in case if name is valid.

```typescript
import { validate } from './validation';

describe('Validation utils', () => {
  it('should validate name \'Pavel\' to be true', () => {
    expect(validate.name('Pavel')).toBeTruthy();
  });
  it('should validate name \'pavel\' to be false', () => {
    expect(validate.name('pavel')).toBeFalsy();
  });
  it('should validate name \'Pav3l\' to be false', () => {
    expect(validate.name('pavel')).toEqual(false);
  });
  it('should validate name \'P***l\' to be false', () => {
    expect(validate.name('pavel')).toBeFalsy();
  });
  it('should validate name \'PaveL\' to be false', () => {
    expect(validate.name('PaveL')).toBeFalsy();
  });
  it('should validate name \'Pa\' to be false', () => {
    expect(validate.name('Pa')).toBeFalsy();
  });
  it('should validate name \'\' to be false', () => {
    expect(validate.name('')).toBeFalsy();
  });
  it('should validate name \'1\' to be false', () => {
    expect(validate.name('1')).toBeFalsy();
  });
});
```
`npm test`
```
Test Suites: 1 failed, 1 total
Tests:       8 failed, 8 total
Snapshots:   0 total
Time:        0.63s, estimated 1s
Ran all test suites related to changed files.
```
Lets implement validate function:

```typescript
export const validate = {
  name: (name: string): boolean => {
    const pattern: RegExp = new RegExp('^[A-Z][a-z]+$');
    return pattern.test(name) && isValue.hasMinSymbols(3, name);
  }
};

const isValue = {
  hasMinSymbols: (numberOfSymbols: number, value: string): boolean => {
    return value.length >= numberOfSymbols;
  }
};
```
```
Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        0.392s, estimated 1s
```

