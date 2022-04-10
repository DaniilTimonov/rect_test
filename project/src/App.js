import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import './styles/App.css';
import PostItem from './components/Postitem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/input/MyInput';
import {useRef} from 'react';

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

const [title, setTitle] = useState('' )
const [body, setBody] = useState('' )


const addNewPost = (e) => {
  e.preventDefault();
     console.log(title);
     
}


  return (
    <div className="App">
  <form>
    {/*Управляемый компонент*/}
    <MyInput

    value={title}
    onChange = {e => setTitle(e.target.value)}
    type="text" placeholder="Название поста"/>

  {/* неуправляемый неконтроллируемый компонент */}
{    <MyInput
     value={title}
     onChange = {e => setTitle(e.target.value)}
     type="text"
      placeholder="Описание поста"/> }
    <MyButton onClick = {addNewPost}>создать пост</MyButton>
  </form>
<PostList posts={posts} title="Посты про JS"/>

</div>
 );
}
export default App;

