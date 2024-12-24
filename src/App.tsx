import { useEffect, useState } from 'react';
import './App.css'
import Notes from './components/Notes'
import { Note } from './types';
import { AppContext } from './AppContext';
import useWindowSize from './hook/useWindowSize';
import useFetch from './hook/useFetch';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const { data, isLoading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  useEffect(() => {
    if (data.length > 0) {
      setNotes(data.map((note: Note) => {
        return {
          title: note.title,
          id: note.id,
          completed: false
        }
      }))
    }
  }, [data])
  const toggleStarNote = (noteId: number) => {
    setNotes(
      notes.map((noteItem) => {
        if (noteItem.id === noteId) {
          return {
            ...noteItem,
            completed: !noteItem.completed
          }
        }
        return noteItem;
      })
    )
  }
  
  const deleteNote = (noteId: number) => {
    setNotes(
      notes.filter((noteItem) => {
        return noteItem.id !== noteId;
      })
    )
  }
  
  const size = useWindowSize();
  return (
    <AppContext.Provider value={{
      notes,
      toggleStarNote,
      deleteNote
    }}>
      {isLoading ? <h1>loading....</h1> : <Notes />}
    </AppContext.Provider>
  )
}

export default App
