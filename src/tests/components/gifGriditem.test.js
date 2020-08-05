import React from 'react';
import { GifGriditem } from '../../GifGriditem';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';



describe('Pruevas en <GifGriditem />', () => {
    const title = 'un titulo';
    const url = 'https://logalhost/algo.gif'
    const wrapper = shallow(<GifGriditem title={title} url={url}/>);

    test('debe retornar componentes correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });

    test('debe tener una img igual a url', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const clasName = div.prop('className');
        expect(clasName.includes('animate__fadeIn')).toBe(true);
    })
    
    

});
