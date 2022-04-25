import React, {useMemo, useState, useEffect} from 'react';
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
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';








function App() {
const [posts, setPosts] = useState(   [])
const [filter, setfilter] = useState ({ sort: '', query: '' })
const [modal, setModal] = useState(false);
const [totalPages, setTotalPages] = useState(0);
const [limit, setLimit] = useState(  10);
const [page, setPage] = useState(  1);
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
let pagesArray = getPagesArray(totalPages);



const [fetchPosts, isPostsLoading, postError ] = useFetching ( async () => {
  const response = await PostService.getAll(limit, page);
  setPosts(response.data);
  const totalCount = response.headers['x-total-count']  
  setTotalPages(getPageCount(totalCount, limit) );
}  )


useEffect(()=> {
  fetchPosts()
},[] )

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
{postError &&
<h1> Произошла ошибка ${postError} </h1>

}

{isPostsLoading
 ? <div style={{display:'flex', justifyContent:'center', marginTop : 50}}  > <Loader /> </div>
 : <PostList remove={removePost}   posts={sortedAndSearchedPosts} title="Посты про JS"/>
}
<div className="page__wrapper" >
{pagesArray.map(p =>
<span 
onclick={() => setPage(p)}
key={p} 
className={page === p ? 'page page__current' : 'page'}
>
  {p}   </span>
)}

</div>




</div>
 );
}
export default App;