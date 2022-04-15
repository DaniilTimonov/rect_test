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


const createPost = (newPost) => {
  setPosts (   [...posts, newPost])
}


// Получаем post из дочернего компонента
const removePost = (post) => {
 setPosts(posts.filter(p => p.id !== post.id))
}



  return (
    <div className="App">
<PostForm create = {createPost} />
{posts.length !== 0
? <PostList remove={removePost}   posts={posts} title="Посты про JS"/>

: <div> Посты не найдены! </div>
}
</div>
 );
}
export default App;

