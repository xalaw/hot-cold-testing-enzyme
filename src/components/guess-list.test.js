import React from 'react';
import {shallow} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('should render', () => {
    shallow(<GuessList guesses={[5, 55, 93, 24, 22]} />);
  });
  it('should render list items correctly', () => {
    const wrapper = shallow(<GuessList guesses={[5]} />);
    expect(wrapper.contains(<li key={0}>{5}</li>)).toEqual(true);
  });  
  it('should render ul with no lis given an empty array', () => {
    const wrapper = shallow(<GuessList guesses={[]} />);
    expect(wrapper.contains(<ul id="guessList" className="guessBox clearfix"></ul>)).toEqual(true);
  });
  it('should have the appropriate classes', () => {
    const wrapper = shallow(<GuessList guesses={[77]} />);
    expect(wrapper.hasClass('guessBox clearfix')).toEqual(true);
  });
});