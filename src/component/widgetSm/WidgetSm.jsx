import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './widgetSm.css'
import { Visibility } from "@material-ui/icons"

export const WidgetSm = () => {
  const [newUsers,setNewUsers] = useState([])

  useEffect(() => {
    async function getNewUsers() {
      try{
        const res = await axios.get('/users?new=true',{
          headers : {
            token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODczNTkyNDJmYWVlODE3MzlhYWJmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzIzMjExOCwiZXhwIjoxNzA3NjY0MTE4fQ.8iMREagSWgFNaEfbpyVQTUokTdRVKXaUtFSEloD7Tig"
          }
        } )
        setNewUsers(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getNewUsers()
  },[])
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        {newUsers.map(user=>(
          <li className='widgetSmListItem'>
          <img src={user.profilePic || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACUCAMAAABY3hBoAAAAqFBMVEX/rQD/////qwD///39pwD7qQD+//v7qwD5pgD4qwD4xGT2tTX1yW/8+/D8+uz15rv68tn66ML74rD7rxb1wl324Kv68NL65Lf5sSb6tTL3zID22Jz4vFT2uUP57cv0zX730437+ub0vU/426f0syL4ynn0sA/88uDnsUbepzbSrV3XqUritE7csVbYozrtrjHKm0DNrGSzk1e2lVHcmiDBnVPSlyrsoAA2t8w8AAADY0lEQVR4nO2aa3eiMBCGISRAuCiIcinIxSpasdt2d7v+/3+20BaVtLXGDbXdM8+H9njaGd9MJkPODJIEAAAAAAAAAAAAAAAAAAAAAAAAAAAA/BcgrBOCEerFNSZEx+fZeuOJ7/iBFQpXhnB05TqOHycav288TeVnHIsI1qVlxbNrJYh4lWHLlnfEQpUhGuxdD6Z8vpGpygdkIneTxIeulyaXby89sFXqdYlThozOmuWAJ2TIUhTl0Hpy3gF6C+J2dCkyT8hwIHcphGUZCm3Gd86xaN1hjBXu0/OusBnjWnY5SqVesMKEJRkymu07xOGJGCtM5Ts7XMJS/XRrnDLCbCpMWLcQ1cQcEcM5YxxwrOoDiM/4nnGsGZnLbooZAutYxqSYxmNNrG7AznjYviuM7vNEURV7zGdORge6fE/oBcMs2vSvf13xVkgtsxvD2lSdCMv8F8Jd8S8s/kcKSa4HzXkcGgL38RnkWWlzNovYPOeJgpBemnOK+7nB6nOzPPMK++SgD1Wt6/58AwAAAAAAAAAAAADwzaBfsVGAqeX68bwXZYh65zapEB07TS/KF919a9Ay33EXHn+nCuHSaoccPJORU91njWPVsTijhnCYLXdddV9cR7z1X7ZjIWcRnhw1RKhxve/1K1wDiBO/Yrz3X+TRCSMhhBCJcr8zglB5+vwnCosGh7OA4ZVJjsYNES/J2fGDK3AUuoMwA5RBmplP7x10Ytd8RBiR0AqW7EiwyMR26tuvxBY7P5QHbrwwpqGnER3j5v0I6kWJsbh2B+x/1qmZ6720nhtpUdwNQjMYVtTB0kmHQTAaBYGbOktbVV6rqmWFgl9P6CjDZbxkhJ2CHRi9RauFRNmrDf2AIp8R8WX1NVifxU3BPBqt9o+qE8/+YfLACcKRMXojvVlhqp+PmyfYJ14p6oqA55nrsAWhpT4Qw3xGP1fUThwmYbKIh86gs6l2kU5yIwm1vrP9uLg6crpOSzNJDMMYT82SUtzwVW6EaM+lpQAAAAAAAAAAAAAA8D34ek2El54U8+PiIGnqhZJUNh11jWqrm0iSQu/Sqp5YV9VqU92uqs36x939dF1tHtZ3lxZVo91v1tXPm8f1r+rmd7h6eLy9X/+pLq2qgUralmpbyaOSJ223aEs8jV5a1DH+AhRUKvMd4Ss9AAAAAElFTkSuQmCC"} alt='widgetSmImg' className='widgetSmImg'/>
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>{user.username}</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  )
}
