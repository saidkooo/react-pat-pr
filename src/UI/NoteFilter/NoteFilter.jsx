import React from 'react';

const NoteFilter = ({defaultValue, options, value, sort}) => {
    console.log('#### value:', value)
    return (
        <select
            value={value}
            onChange={event => sort(event.target.value)}
        >   
            <option disabled>{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>{ option.title }</option>
            )}
        </select>
    );
}

export default NoteFilter;
