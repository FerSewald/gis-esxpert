import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../AddCategory';

describe('Pruevas en <AddCategory />', () => {
    const setCategories = () => {};

    const wrapper = shallow(<AddCategory setCategories={setCategories}/>)



    test('debe de mostrase correctamete', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('deve cambiar el input', () => {
        
        const input = wrapper.find('input');
        const value = 'hola mundo' 

        input.simulate('change', {target: { value: value } });

        expect(wrapper.find('p').text().trim()).toBe(value);

    })
    
    
});
