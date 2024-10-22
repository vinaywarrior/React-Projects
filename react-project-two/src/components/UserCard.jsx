import React from 'react'
import mysore from '../assets/mysore.jpg' 
import "./UserCard.css"
const UserCard = (props) => {
    return (
      <div className='user-container'>
          <p id='user-name'>{props.name}</p>
          <img id='user-img' src={mysore} alt='vinay'></img> //props.image
          <p id='user-description'> description of vinay</p>
      </div>
    )
  }
  
  export default UserCard