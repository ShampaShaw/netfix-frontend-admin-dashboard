import React from 'react'
import './home.css'
import { FeaturedInfo } from '../../component/FeaturedInfo/FeaturedInfo'
import { Chart } from '../../component/chart/Chart'
import { userData } from '../../dummyData'
import { WidgetSm } from '../../component/widgetSm/WidgetSm'
import { WidgetLg } from '../../component/widgetLg/WidgetLg'
import { useState,useEffect,useMemo } from 'react'
import axios from 'axios'
const server = process.env.SERVER_URL || "http://localhost:5000";  

export default function Home() {
  const MONTHS = useMemo(() => [
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
  ], []);

  const [userStats,setUserStats] = useState([])

  // useEffect(() => {
  //   const getStats = async () => {
  //     try{
  //       const res = await axios.get("http://localhost:5000/api/users/stats", {headers:
  //         {
  //         token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODczNTkyNDJmYWVlODE3MzlhYWJmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzMyNDQxNywiZXhwIjoxNzA3NzU2NDE3fQ.DqTtvoXD8WFZIWUSN0iB5QIvtZSYCZ2Rti4jCqVv8Js"
  //         }
  //       })
  //       const statsList = res.data.sort(function(a,b) {
  //         return a._id - b._id
  //       })
  //       statsList.data.map(item=> setUserStats(prev=>[...prev,{name:MONTHS[item._id-1],"New User": item.total}]))
  //     }catch(err){
  //       console.log("Error fetching user stats:", err);
  //     }
  //   } 
  //   getStats()
  // },[MONTHS])
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(`${server}/api/users/stats/`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODczNTkyNDJmYWVlODE3MzlhYWJmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzMyNDQxNywiZXhwIjoxNzA3NzU2NDE3fQ.DqTtvoXD8WFZIWUSN0iB5QIvtZSYCZ2Rti4jCqVv8Js"
          },
        });
  
        //console.log("API Response:", res.data);
  
        const statsList = res.data.sort((a, b) => a._id - b._id)
        console.log("statsList", statsList);
          
          const stats = statsList.map((item) => ({
            name: MONTHS[item._id - 1], "New User": item.total
          }));
          setUserStats(stats)
          console.log(userStats)
          // statsList.map((item) =>
          // setUserStats((prev) => [
          //   ...prev,
          //   { name: MONTHS[item._id - 1], "New User": item.total },
          // ])
        //);
      } catch (err) {
        console.error("Error fetching user stats:", err.message);
        // Optionally, display a user-friendly error message
      }
    };
  
    getStats();
  }, [MONTHS]);
  
  console.log("User Response:",userStats);  // Log the state after it has been updated

  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
        <div className='homeWidgets'>
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
