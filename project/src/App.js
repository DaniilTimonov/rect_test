import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';


function App() {
const [likes, setLikes] = useState(5)
const [value, setValue] = useState('Текст в инпуте')


  return (
    <div className="App">
<div className = "post">
  <div className = "post_content">
    <strong>1. Javascript</strong>
    <div>
      Javascript - язык программирования
    </div>
    <div className = "post_btns">
      <button>Удалить</button>
    </div>
  </div>
</div>


</div>
  );
}
export default App;

