import React from "react"
import {connect} from 'react-redux'
import {Link} from'react-router-dom'
function PostDetail(props){
    console.log(props.user)
    return(
        <div>
    {props.user&&props.post?(
         <div>
            
             <h1>user Name-{props.user.name}</h1> 
             <h2>title-{props.post.title}</h2>
             <h1>body</h1>
             <h2>{props.post.body}</h2>
             <h1>comments</h1>
             <ul>
                 {
                     props.comment.map(comment=>{
                    return <li key={comment.id}>{comment.body}</li>
                     })
                 }
             </ul>
             <Link to={`users/${props.user.userId}`}>more about author-{props.user.name}</Link>
             </div>

     ):(
         <p>loading</p>
     )
     
     }

        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
       user:state.users.find(user=>user.id==state.posts.find(post=>post.id==id).userId),
        post:state.posts.find(post=>post.id==(id)),
comment:state.comments.filter(comment=>comment.postId==id)

    }
}
export default connect(mapStateToProps)(PostDetail)