import React from  'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe ('<GuessCount />', () => {
    it('It should render', () => {
        shallow(<GuessCount />);
    }); 
    it('It should render with a prop number value', () => {
        const propvalue = 1;
        const wrapper = shallow(<GuessCount count={propvalue} />);
        expect(wrapper.contains(<span id="count">{propvalue}</span>)).toEqual(true);
    });
});