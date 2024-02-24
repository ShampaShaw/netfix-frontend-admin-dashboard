import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import { UserList } from './pages/userList/UserList';
import User from './pages/user/User';
import { NewUser } from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import { Product } from './pages/product/Product';
import { NewProduct } from './pages/newProduct/NewProduct';
import { Login } from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';
import ListList from './pages/listList/ListList';
import List from './pages/home/list/List';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
      </Routes>
      
      {user && (
        <>
          <Topbar /> {/* Place Topbar outside Routes */}
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/users' element={<UserList />} />
              <Route path='/user/:userID' element={<User />} />
              <Route path='/newUser' element={<NewUser />} />
              <Route path='/movies' element={<ProductList />} />
              <Route path='/product/:productId' element={<Product />} />
              <Route path='/newProduct' element={<NewProduct />} />
              <Route path='/lists' element={<ListList />} />
              <Route path='/list/:listId' element={<List />} />
              <Route path='/newlist' element={<NewProduct />} />
              <Route path='/lists' element={<ListList />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
