import React from 'react'
import './user.css'

const User = () => {
  return (
    <div className='user'>
        <div className='userTitleContainer'>
            <h1 className='userTitle'>Edit User</h1>
            <button className='userAddButton'>Create</button>
        </div>
        <div className='userContainer'>
            <div className='userShow'>
                <div className='userShowTop'>
                    <img className='userShowImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZiDYVFY3pHMqANAFlTdWbwF2KpclMAbp8g&usqp=CAU' alt='' />
                    <div className='userShowTopTitle'>
                        <span className='userShowUserName'>Shampa Shaw</span>
                        <span className='userShowUserTitle'>Software Engineer</span>
                    </div>
                </div>
                <div className='userShowBottom'></div>
            </div>
            <div className='userUpdate'></div>
        </div>
    </div>
  )
}

export default User