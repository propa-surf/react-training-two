import React, {useState} from 'react'

function Profile({myquote,myimage,changeMainTitle}) {

    const [myTitle, setMyTitle] = useState('Quotes')

    
    const changeProfileTitle=()=>{
        setMyTitle('Another Quote')
      }
    
    
        return (
          <div className="profile-container">
            <h3 className="profile-header">{myTitle}</h3>
            <div className='image-quote'>
              <img className='profile-image' src={myimage} alt='Pic'/>
              <p className='myquote'>{myquote}</p>
            </div>
            <div className='button-container'>
              <button className='change-main' onClick={changeMainTitle}>Change Main</button>
              <button className='change-profile' onClick={changeProfileTitle}>Change Profile</button>
            </div>
          </div>
        )
    }

export default Profile