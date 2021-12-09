import React from 'react';
import NoteInput from '../../UI/NoteInput/NoteInput';
import NoteSelect from '../../UI/NoteSelect/NoteSelect';

const NotesFilter = ({filter, setFilter}) => {
    return (
        <div>
            <NoteInput 
                placeholder='Поиск...' 
                value={filter.searchQuery} 
                onChange={e => setFilter({...filter, searchQuery: e.target.value})}
            />

            <NoteSelect
                onChange={selectedSort => setFilter({...filter, sortQuery: selectedSort.target.value})}
                defaultValue='По умолчанию'
                options={[
                    {value: 'title', title: 'По названию'}, 
                    {value: 'descr', title: 'По содержанию'}
                ]}
                value={filter.sortQuery}
            />
        </div>
    );
}

export default NotesFilter;
