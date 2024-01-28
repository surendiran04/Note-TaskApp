const TasksContext = React.createContext();

const TasksProvider = ({children}) => {
    const [ TaskTitle, setTaskTitle] = useState(null);
    const [ TaskDescription, setTaskDescription] = useState(null);

   return (
       <TasksContext.Provider value={{TaskTitle,setTaskTitle,TaskDescription, setTaskDescription}}>{children}</TasksContext.Provider>
   )
} 

export default TasksProvider ;