import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./UserDetail.css"
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
    const { username } = useParams();
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                setUserDetails(data);
            })
            .catch(error => console.error('Error fetching user details:', error));
    }, [username]);

    if (!userDetails) {
        return <div>Loading...</div>;
    }
    const onClikBack = () => {
        navigate("/")
    }


    return (
        <div className="bg">
            <h1 style={{textAlign:"center",margin:0}}>User Details</h1>
            <div className='userDetailContiner'>
                <header style={{ display: "flex" }}>
                    <div style={{ width: "80%", textAlign: "center" }}>
                        <h1>{userDetails.login}</h1>
                        <span>{userDetails.bio}</span>
                    </div>
                    <div>
                        <img src={userDetails.avatar_url} alt={userDetails.login} style={{ width: '120px', height: '120px', borderRadius: '50%' }} />
                    </div>
                </header>
                <hr></hr>
                <div className='content'>
                    <h2>First Name: {userDetails.name}</h2>
                    <hr></hr>
                    <h2>Last Name: {userDetails.login}</h2>
                    <hr></hr>
                    <h2>Username: {userDetails.login}</h2>
                    <hr></hr>
                    <h2>Company: {userDetails.company || 'N/A'}</h2>
                    <hr></hr>
                    <h2>Followers: {userDetails.followers}</h2>
                    <hr></hr>
                    <h2>Following: {userDetails.following}</h2>
                    <hr></hr>
                    <h2>Public Repositories: {userDetails.public_repos}</h2>
                </div>
                <div className='locationAndMail'>
                    <div style={{ display: "flex" }}>
                        <LocationOnTwoToneIcon /><span style={{ paddingLeft: "10px", fontWeight: "bold" }}>{userDetails.location}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <MailOutlineTwoToneIcon />
                        <span style={{ paddingLeft: "10px", fontWeight: "bold" }}>{userDetails.email}</span>
                    </div>
                </div>
                <hr></hr>
                <footer>
                    <button className='backButton' onClick={onClikBack}>Back To List</button>
                </footer>
            </div>
        </div>
    );
};

export default UserDetails;