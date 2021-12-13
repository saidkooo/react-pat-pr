import { useMemo } from "react";

export const useSortedNotes = (notes, sortQuery) => {
    const sortedNotes = useMemo(() => {

        if(sortQuery) {
          return [...notes].sort((a, b) => a[sortQuery].localeCompare(b[sortQuery]));
        } else {
          return notes;
        }
    }, [sortQuery, notes]);

    return sortedNotes;
}

export const useNotes = (notes, sortQuery, searchQuery) => {
    const sortedNotes = useSortedNotes(notes, sortQuery);

    const sortedAndFoundedNotes = useMemo(() => {
        return sortedNotes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [sortedNotes, searchQuery])
    
    return sortedAndFoundedNotes;
}