import { useSetRecoilState } from "recoil";
import { Todos } from "../atoms/Todoslist";
export function Completed({id}){
    const isComplete = useSetRecoilState(Todos)
    
    return(
      
      <button onClick={
        ()=>{
          isComplete(oldTodos => {
            return oldTodos.map((todo) => 
              todo.id === id ? {...todo, isComplete: true} : todo
            );
          })
        }
      }
      >Mark as Complete</button>
    )
  }
  