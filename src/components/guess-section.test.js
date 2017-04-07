import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';
import GuessForm from './guess-form';

describe('<GuessSection />', () => {
    it('Should render Guess Section', () => {
        shallow(<GuessSection />);
    });
    it('H2 should display feedback', ()=> {
        const feedback = "Feedback String";
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.contains(<h2 id="feedback">{feedback}</h2>)).toEqual(true);
    });
});