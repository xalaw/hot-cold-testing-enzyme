import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('should render', () => {
    shallow(<GuessForm />);
  });
  it('should run callback after form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const value = 24;
    wrapper.find("input[name='userGuess']").node.value=value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith('24'); 
  });
});