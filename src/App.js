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
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'


function App() {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const [userStats,setUserStats] = useState([])

  useEffect(() => {
    const getStats = async () => {
      try{
        const res =  axios.get("/users/stats", {headers:
          {
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODczNTkyNDJmYWVlODE3MzlhYWJmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjk2MzUyMCwiZXhwIjoxNzA3Mzk1NTIwfQ.RYwYUlbj8vJ_cnvgzZP0A58xmHmZSbWq23SjNArk2J0"
          }
        })
        setUserStats(res.data)
        console.log(userStats)
      }catch(err){
        console.log(err)
      }
    } 
    getStats()
  },[])


  return (
    <Router>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/user/:userID' element={<User />} />
            <Route path='/newUser' element={<NewUser />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/newProduct' element={<NewProduct />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
