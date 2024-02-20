import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Test from './pages/Test';
import Information from './pages/Information';
import Navbar from './components/Navbar';
import HoogleOnKorea from './pages/HoogleOnKorea';
import Search from './pages/Search';
import SearchNavbar from './components/SearchNavbar';
import NewPost from './pages/NewPost';
import ChangeName from './pages/ChangeName';
import ChangePassword from './pages/ChangePassword';
import SearchResult from './pages/SearchResult';


function App() {
  return (
    <div className='test' style={{ backgroundColor: '#181a20', minHeight: '100vh' }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logIn' element={<LogIn />} />
        <Route path='/logIn/:ps' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/test' element={<Test />} />
        <Route path='/information' element={<Information />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/hoogleonkorea' element={<HoogleOnKorea />} />
        <Route path='/search' element={<Search />} />
        <Route path='/newpost' element={<NewPost />} />
        <Route path='/changename' element={<ChangeName />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/search-result/:id' element={<SearchResult />} />
      </Routes>
    </div>
  );
}

export default App;
