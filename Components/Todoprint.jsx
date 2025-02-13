import { useRecoilValue } from "recoil";
import { Todos } from "../atoms/Todoslist";
import { Completed } from "./Completed";
export function Todoprint() {
  const todos = useRecoilValue(Todos)
  
   return(
    
     <div>
       {todos.map((todo) => 
       <div key={todo.id}>
       <div >{todo.text}</div>
       <div >{todo.isComplete ? "Completed" : null}</div>
       {todo.isComplete == true ? null : <Completed id={todo.id} />}
        </div>
        
       )}
       
     </div>
     
   )
 }