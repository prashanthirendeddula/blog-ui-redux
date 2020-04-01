import React from "react"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
function Users(props){
    return (
        <div>
            <h1>usersList-{props.users.length}</h1>
            <ul>
                {
                    props.users.map(user=>{
                        return <li key={user._id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}
 const mapStateToProps=(state)=>{
    return{
        users:state.users
    } 
}
export default connect(mapStateToProps)(Users) 