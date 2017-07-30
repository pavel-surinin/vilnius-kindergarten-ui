import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Footer } from '../Footer';

describe('Footer Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Footer/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctle(checked with enzyme)', () => {
    // console.log(shallow(<Footer/>).debug());
    const hasClass: boolean = shallow(<Footer/>).hasClass('app-footer');
    expect(hasClass).toBeTruthy();
  });
});

it('renders mock date', () => {
  Date.now = jest.fn(() => 14823633672);
  expect(Date.now()).toMatchSnapshot();
});
