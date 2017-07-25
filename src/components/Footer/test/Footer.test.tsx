import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Footer } from '../Footer';

describe('Footer Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Footer/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders mock date', () => {
    Date.now = jest.fn(() => 14823633672);
    expect(Date.now()).toMatchSnapshot();
  });
  it('renders info message');
});
