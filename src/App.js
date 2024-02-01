import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';


function App() {
  return (
    <div className='test' style={{backgroundColor:'#181a20',minHeight:'100vh'}}>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/logIn' element={<LogIn/>} />
     <Route path='/logIn/:ps' element={<LogIn/>}  />
     </Routes>
    </div>
  );
}

export default App;
