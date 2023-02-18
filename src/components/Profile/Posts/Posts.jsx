import React from "react";
import ProfileModuleStyle from '../Profile.module.css';
import Post from "./Post/Post";
import Store from "../../../State/State";

function Posts() {
    return ( 
        <div className={ProfileModuleStyle.posts}>
        <h2>My posts</h2>
        <div className={ProfileModuleStyle.posts__management}>
          <textarea name="q" id="" cols="30" rows="10"></textarea>
          <button>Add post</button>
        </div>
        <div className={ProfileModuleStyle.posts__list}>
          {Store.posts.map(post=> <Post k={post.id} id={post.id} text={post.text}/> )}
        </div>
      </div>
     );
}

export default Posts;