import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import './styles/App.css';
import PostItem from './components/Postitem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/input/MyInput';
import {useRef} from 'react';
import PostForm from './components/PostForm';

function App() {
const [posts, setPosts] = useState([
 {id:1, title:'Javascript', body:'Description'},
 {id:2, title:'Javascript 2', body:'Description'},
 {id:3, title:'Javascript 3', body:'Description'},
])
const [posts2, setPosts2] = useState([
  {id:1, title:'Python', body:'Description'},
  {id:2, title:'Python 2', body:'Description'},
  {id:3, title:'Python 3', body:'Description'},
 ])

const createPost = (newPost) => {
  setPosts (   [...posts, newPost])
}





  return (
    <div className="App">
<PostForm create = {createPost} />
<PostList posts={posts} title="Посты про JS"/>

</div>
 );
}
export default App;

