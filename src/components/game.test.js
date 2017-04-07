import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', ()=> {
    it('Should render the game without error', () => {
        shallow(<Game />);
    });
    it('Should set guess in State', () => {
        const wrapper = shallow(<Game />);
        const instance = wrapper.instance();
        wrapper.setState({correctAnswer: 20});
        instance.guess(5);
        expect(wrapper.state()).toEqual({guesses: [5], correctAnswer: 20, feedback: 'You\'re Warm'});
    });
    it('Should reset State when newGame is invoked.', () => {
        const wrapper = shallow(<Game />);
        const instance = wrapper.instance();
        const guesses = [3, 6, 10];
        const feedback = 'You are playing the game.';
        const correctAnswer = 'string'; 
        wrapper.setState({guesses , feedback, correctAnswer});
        expect(wrapper.state('correctAnswer')).toEqual('string');
        instance.newGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).not.toBe('string');
    });
});