import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {startGetUsers} from './actions/users'
import {startGetPosts} from './actions/posts'
import {startGetComments}from './actions/comments'


const store=configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())
store.dispatch(startGetComments())
const jsx=(
    <Provider store={store}>
             <App/>

    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));

