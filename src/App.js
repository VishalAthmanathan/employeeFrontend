import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Empform from './components/empform';
import SecondForm from './components/nextform';
// import Table from './components/viewtable';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Empform/>} />
        <Route path='/secondform' element={<SecondForm/>}/>
        {/* <Route path='/viewuser' element={<Table/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
