import React from 'react';
import Mybutton from "./UI/button/MyButton";


const PostItem = (props) => {
return (
<div className = "post">
  <div className = "post_content">
    <strong> {props.post.id}. {props.post.title} </strong>
    <div>
    {props.post.body}
    </div>
    </div>
    <div className = "post_btns">
      <Mybutton onClick={() => props.remove(props.post)}>
        Удалить
      </Mybutton>
    </div>
  </div>



);

};
export default PostItem;
