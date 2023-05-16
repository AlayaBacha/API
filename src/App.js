import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListUsers from './Components/ListUsers';
import NavUsers from './Components/NavUsers';
import Home from './Components/Home';
import Descuser from './Components/DescUser';
import { useState } from 'react';
import PrivteRout from './Components/PrivteRoute';

function App() {
  const[Auth,setAuth] = useState(false)
  return (
    <div>
      {/* <ListUsers/> */}
      <NavUsers Auth={Auth} setAuth={setAuth}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listusers' element={<PrivteRout Auth={Auth}><ListUsers/></PrivteRout>}/>
        <Route path='/descuser/:id' element={<PrivteRout Auth={Auth}><Descuser/></PrivteRout>}/>
      </Routes>
    </div>
  );
}

export default App;
