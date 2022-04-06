import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import './styles/App.css';
import PostItem from './components/Postitem';

function App() {
const [posts, setPosts] = useState([
 {id:1, title:'Javascript', body:'Description'},
 {id:2, title:'Javascript 2', body:'Description'},
 {id:3, title:'Javascript 3', body:'Description'},


])

//test
  return (
    <div className="App">
{posts.map(post =>
<div> Post </div>
)}

</div>
 );
}
export default App;

