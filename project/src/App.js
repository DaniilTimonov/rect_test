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




function App() {
const [posts, setPosts] = useState([
 {id:1, title:'аа', body:'бб'},
 {id:2, title:'гг 2', body:'аа'},
 {id:3, title:'вв 3', body:'яя'},
])

const [filter, setfilter] = useState ({ sort: '', query: '' })
const [modal, setModal] = useState(false);


const sortedPosts = useMemo( () => { 
 
  if(filter.sort) {
    return [...posts].sort( (a , b) => a[filter.sort].localeCompare(b[filter.sort] )  )
  }
  return posts;
}, [filter.sort, posts])

const sortedAndSearchedPosts = useMemo(() => {
 return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
}, [filter.query, sortedPosts] )

const createPost = (newPost) => {
  setPosts (   [...posts, newPost])
  setModal(false)
}


// Получаем post из дочернего компонента
const removePost = (post) => {
 setPosts(posts.filter(p => p.id !== post.id))
 
}



return (
    <div className="App">
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

