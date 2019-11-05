// run jest --updateSnapshot to update snapshots as components are updated
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import Navbar from '../App';
/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    });
});

describe('Testing Navbar snapshot', () => {
  it("renders correctly", () => {
    const navbar = shallow(<Navbar />);
    expect(navbar).toMatchSnapshot();
  });
});


//practice test
describe('Examining the syntax of Jest tests', () => {

  it('sums numbers', () => {
      expect(1 + 2).toEqual(3);
      expect(2 + 2).toEqual(4);
   });
});
