import { RecoilRoot } from 'recoil'
import { AddTodo } from './components/AddTodo'
import { Todoprint } from './components/Todoprint'
function App() {
    
  return (
    <div>
      <RecoilRoot>
        <AddTodo />
      <Todoprint />
      </RecoilRoot>
    </div>
  )
}
export default App
