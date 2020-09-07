import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Comment = () => {

const {postId}= useParams();
const [post,setPost]=useState([]);

useEffect(()=>{  
    const url =`https://jsonplaceholder.typicode.com/comments/${postId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPost(data))

},[])
    return (
        <div>
            <h3>This is comment details section: {postId}</h3>     
    <h3>Name:{post.Name}</h3>
    <h4>Comment: {post.Body}</h4>
            
        </div>
    );
};

export default Comment;