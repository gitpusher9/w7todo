import { useSetRecoilState } from "recoil";
import { Todos } from "../atoms/Todoslist";
export function AddTodo(){
  
    const setTodos = useSetRecoilState(Todos)
    let title =" ";
    return(
      <div>
        <input type="text" placeholder="Enter Todo" onChange={
          function(e){ title = e.target.value;
          } }/>
        
        <br></br>
        <br></br>
        
        <button onClick={
          ()=> {
            setTodos((oldTodos)=> 
              [...oldTodos,{
                id: oldTodos.length +1,
                text: title,
                isComplete: false
              }
            ])
          }
        } >Add Todo</button>
        <br></br>
        <br></br>
      </div>
    )
  }