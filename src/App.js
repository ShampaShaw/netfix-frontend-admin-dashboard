import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import { UserList } from './pages/userList/UserList';


function App() {
  return (
    <Router>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<UserList />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
