import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
function UsersShow(props){
    return(
        <div>
            {props.user?(<div>
       <h1>userName-{props.user.name}</h1>
       
      

       </div>):<h2>loading</h2>
            
             }
             
                    <h1>posts written by user</h1>
                    
                    {props.posts.map(post=>{
                  return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                  })
                  }
                  <Link to= '/users'>back</Link>  
 
             
              </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return {
                user:state.users.find(user=>user.id===parseInt(id)),
                posts :state.posts.filter(post=>post.userId===parseInt(id)),
               // posts:state.posts
    }
}
export default connect(mapStateToProps)(UsersShow)