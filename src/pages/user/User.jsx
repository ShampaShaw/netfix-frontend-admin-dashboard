import React from 'react'
import './user.css'
import { Link } from 'react-router-dom'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'

const User = () => {
  return (
    <div className='user'>
        <div className='userTitleContainer'>
            <h1 className='userTitle'>Edit User</h1>
            <Link to="/newUser">
                <button className='userAddButton'>Create</button>
            </Link>
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
                <div className='userShowBottom'>
                    <span className='userShowTitle'>Account Details</span>
                    <div className='userShowInfo'>
                        <PermIdentity className='userShowIcon'/>
                        <span className='userShowInfoTitle'>shreyasbaby</span>
                    </div> 
                    <div className='userShowInfo'>
                        <CalendarToday className='userShowIcon'/>
                        <span className='userShowInfoTitle'>11.11.2002</span>
                    </div> 
                    <span className='userShowTitle'>Contact Details</span>
                    <div className='userShowInfo'>
                        <PhoneAndroid className='userShowIcon'/>
                        <span className='userShowInfoTitle'>+1 123 456 67</span>
                    </div> 
                    <div className='userShowInfo'>
                        <MailOutline className='userShowIcon'/>
                        <span className='userShowInfoTitle'>shreyas.ofc@gmail.com</span>
                    </div> 
                    <div className='userShowInfo'>
                        <LocationSearching className='userShowIcon'/>
                        <span className='userShowInfoTitle'>Durgapur | West Bengal</span>
                    </div> 
                </div>
            </div>
            <div className='userUpdate'>
                <span className='userUpdateTitle'>Edit</span>
                <form action='' className='userUpdateForm'>
                    <div className='userUpdateLeft'>
                        <div className='userUpdateItem'>
                            <label>Username</label>
                            <input type='text' placeholder='shreyasbaby' className='userUpdataInput'/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Full Name</label>
                            <input type='text' placeholder='Shampa Shaw' className='userUpdataInput'/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Email</label>
                            <input type='text' placeholder='shreyas.ofc@gmail.com' className='userUpdataInput'/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Username</label>
                            <input type='text' placeholder='shreyasbaby' className='userUpdataInput'/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Phone</label>
                            <input type='text' placeholder='+91 865331421' className='userUpdataInput'/>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Address</label>
                            <input type='text' placeholder='in my heart' className='userUpdataInput'/>
                        </div>
                    </div>
                    <div className='userUpdateRight'>
                        <div className='userUpdateUpload'>
                            <img 
                                className='userUpdateImg' 
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZiDYVFY3pHMqANAFlTdWbwF2KpclMAbp8g&usqp=CAU' 
                                alt='' 
                            />
                            <label htmlFor='file'><Publish className='userUpdateIcon'/></label>
                            <input type='file' id='file' style={{display:"none"}}/>
                        </div>
                        <button className='userUpdateButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User