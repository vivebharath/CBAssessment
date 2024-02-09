import './UserItem.css';
 import { useNavigate } from "react-router-dom";
const UserItem =({user})=>{
    const navigate = useNavigate();
    const  navigateToDetail=()=>{
        navigate(`/user-details/${user.login}`)
    }
    return(
        <div id={user.login} onClick={navigateToDetail}>
        <div className="usercard">
            <div className="userAvatar">
                <img src={user.avatar_url} alt={user.login} style={{ width: '80px', height: '80px', borderRadius: '50%', alignItems: "center" }} />
            </div>
            <hr></hr>
            <h3>First Name: {user.login}</h3>
            <h3>ID: {user.id}</h3>
            <h3>Username: {user.login}</h3>
        </div>
        </div>
    )
}
export default UserItem