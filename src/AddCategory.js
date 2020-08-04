import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setIInputValue] = useState('')
    const handleInputChange = (e) => {
        
        setIInputValue(e.target.value)
    }
    const handelSubmit   = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setIInputValue('');
        }

    }

    return (
        <form onSubmit={handelSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}