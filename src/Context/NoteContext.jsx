import React from 'react';

export const NotesContext = React.createContext();

 const NotesProvider = ({children}) => {
    
     const [NotesTitle,setNotesTitle] = useState('')
    return (
        <NotesContext.Provider value={{NotesTitle,setNotesTitle}} >{children}</NotesContext.Provider>
    )} ;

 
 export default NotesProvider;


