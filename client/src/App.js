import './index.css'
import {Route, Routes} from 'react-router-dom'
import PageNotFound from './pages/NotFound/PageNotFound'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import TodoList from './pages/Todolist/TodoList'

const App = () => {
	return (
		<>
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/signup' element={<Signup />} />
			<Route path='/todolist' element={<TodoList />} />
			<Route path='*' element={<PageNotFound/>}/>
		</Routes>
		</>
  );
}


export default App;
