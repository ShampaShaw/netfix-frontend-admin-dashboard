import React from 'react'
import './newUser.css'

export const NewUser = () => {
  return (
    <div className='newUser'>
        <h1 className='newUserTitle'>New User</h1>
        <form className='newUserForm'>
            <div className='newUserItem'>
                <label>Username</label>
                <input type='text' placeholder='Shampa'/>
            </div>
            <div className='newUserItem'>
                <label>Full Name</label>
                <input type='text' placeholder='Shampa Shaw'/>
            </div>
            <div className='newUserItem'>
                <label>Email</label>
                <input type='email' placeholder='shampa@gamil.com'/>
            </div>
            <div className='newUserItem'>
                <label>Password</label>
                <input type='password' placeholder='password'/>
            </div>
            <div className='newUserItem'>
                <label>Phone</label>
                <input type='text' placeholder='7439652334'/>
            </div>
            <div className='newUserItem'>
                <label>Address</label>
                <input type='text' placeholder='India'/>
            </div>
            <div className='newUserItem'>
                <label>Gender</label>
                <div className='newUserGender'>
                    <input type='radio' name='gender' id='male' value='male'/>
                    <label for='male'>Male</label>
                    <input type='radio' name='gender' id='female' value='female'/>
                    <label for='female'>Female</label>
                    <input type='radio' name='gender' id='other' value='other'/>
                    <label for='other'>Other</label>
                </div>
            </div>
        </form>
    </div>
  )
}
