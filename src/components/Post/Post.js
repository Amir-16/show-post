import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const{id,title,body} =props.post;
    const history=useHistory();
    const handleClick=(postId)=>{
        const url = `/post/${postId }`;
        history.push(url);
    }
    const postStyle ={

        border:'1px solid gray',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
  
    }

    return (
        <div style={postStyle}>
        <Button onClick={() => handleClick(id) }>See comments</Button>
          <h3>Title:{title}</h3>
     <p>News:{body}</p>
        
        
    </div>
    );
};

export default Post;