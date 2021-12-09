import React from 'react';
import './style.css'

const NoteSelect = ({defaultValue, options, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={onChange}
        >   
            <option disabled>{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>{ option.title }</option>
            )}
        </select>
    );
}

export default NoteSelect;
