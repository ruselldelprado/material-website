import './index.css'
import {Route, Routes} from 'react-router-dom'
import PageNotFound from './pages/NotFound/PageNotFound'
import Login from './pages/Login/Login'

const App = () => {
	return (
		<>
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='*' element={<PageNotFound/>}/>
		</Routes>
		</>
  );
}


export default App;
