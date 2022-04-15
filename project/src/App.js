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
import MySelect from './components/UI/select/MySelect';



function App() {
const [posts, setPosts] = useState([
 {id:1, title:'Javascript', body:'Description'},
 {id:2, title:'Javascript 2', body:'Description'},
 {id:3, title:'Javascript 3', body:'Description'},
])

const [selectedSort, setSelectedSort] = useState('')
const createPost = (newPost) => {
  setPosts (   [...posts, newPost])
}


// Получаем post из дочернего компонента
const removePost = (post) => {
 setPosts(posts.filter(p => p.id !== post.id))
}

const sortPosts = (sort) => {
setSelectedSort(sort);
console.log(sort)
}

return (
    <div className="App">
<PostForm create = {createPost} />
<hr style = {{margin:'20px 0'}}/>
<div>
<MySelect
  value = {selectedSort}
  onChange = {sortPosts}
  defaultValue="Сортировка"
  options={[
{value:'title', name: 'По названию'},
{value:'body', name: 'По описанию'},
  ]}
/>
</div>
{posts.length !== 0
? <PostList remove={removePost}   posts={posts} title="Посты про JS"/>

: <h1 style={{textAlign: 'center'}}> 
Посты не найдены! </h1>
}
</div>
 );
}
export default App;

