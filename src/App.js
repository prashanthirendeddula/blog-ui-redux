import React from 'react';
import Home from'./components/Home'
import Users from './components/Users'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import UsersShow from './components/UsersShow'
import Posts from './components/Posts'
import PostsShow from './components/PostsShow'

function App() {
  return (
   <BrowserRouter>
   <div>
     <h1>react-redux </h1>
     <Link to='/'>Home</Link>
     <Link to='/users'>Users</Link>
     <Link to='/posts'>Posts</Link>
     <Route path='/'component={Home}  exact={true}/>
     <Route path='/users'component={Users} exact={true}/>
     <Route path='/posts'component={Posts} exact={true}/>
     <Route path ='/users/:id' component={UsersShow}/>
     <Route path='/posts/:id' component={PostsShow}/>
     </div>

         </BrowserRouter>
     
 
  );
}

export default App;
