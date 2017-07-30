import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Header } from '../Header';
import 'jest-enzyme';

describe('Header Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Header title="header"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
