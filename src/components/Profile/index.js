import { useState, useEffect} from 'react'
import axios from 'axios'
import './style.css'

const Profile = () =>{
    const [ bar , setBar]= useState([]);
    useEffect( () => {
        axios.get('js/data.json').then(res => {setBar(res.data.profile)})
    },[])

    const ProfileBars = bar.map( (profileItem) => {
         return(
            <div className="bar" key={profileItem.id}>
                    <span className="title">{profileItem.title}</span>
                    <span className="perc">{profileItem.percentage}</span>
                    <div className="parent">
                        <span className={profileItem.style}></span>
                    </div>
                </div>
         )
    })

    return(
        <div className="profile_skills">
        <div className="container">
            <div className="profile">
                <h2 className="profile-title"><span>My </span>Profile</h2>
                <ul className="profile-list">
                    <li className="profile-item">
                        <span>Name</span>
                        Kholoud Shaker
                    </li>
                    <li className="profile-item">
                        <span>Birthday</span>
                        13/11/1996
                    </li>
                    <li className="profile-item">
                        <span>Address</span>
                        Alexandria
                    </li>
                    <li className="profile-item">
                        <span>Phone</span>
                        4444 5555 6666
                    </li>
                    <li className="profile-item">
                        <span>Email</span>
                        kholoud@kholoud.com
                    </li>
                    <li className="profile-item">
                        <span>Website</span>
                        <span className="web">www.google.com</span>
                    </li>
                </ul>
            </div>
            
            <div className="skills">
                <h2 className="skills-title">Some <span>skills</span></h2>
                <p className="skills-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </p>
                
            {ProfileBars}
        </div>
    </div>
    </div>
    )
}

export default Profile;