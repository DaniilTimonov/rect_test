import React, {useMemo, useState} from 'react';
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
import PostFilter from './components/PostFilter';
import Mymodal from './components/UI/MyModal/Mymodal';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';






function App() {
const [posts, setPosts] = useState(   [])
const [filter, setfilter] = useState ({ sort: '', query: '' })
const [modal, setModal] = useState(false);
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);



const createPost = (newPost) => {
  setPosts (   [...posts, newPost])
  setModal(false)
}
async function fetchPosts(){
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(response.data);
}

// Получаем post из дочернего компонента
const removePost = (post) => {
 setPosts(posts.filter(p => p.id !== post.id))
 
}



return (
    <div className="App">
      <button onClick={fetchPosts}> Get posts</button>
      <MyButton style={{marginTop: 50}} onClick={() => setModal(true) }>
        создать пользователя
      </MyButton>
<Mymodal visible={modal} setVisible = {setModal} >
<PostForm create = {createPost} />
</Mymodal>

<hr style = {{margin:'20px 0'}}/>
<PostFilter
  filter = {filter}
  setFilter = {setfilter}

/>
 <PostList remove={removePost}   posts={sortedAndSearchedPosts} title="Посты про JS"/>
</div>
 );
}
export default App;

