import React from "react";
import ProfileModuleStyle from '../Profile.module.css';
import avatar from '../../../img/multiCat.png';

function Posts() {
    return ( 
        <div className={ProfileModuleStyle.posts}>
        <h2>My posts</h2>
        <div className={ProfileModuleStyle.posts__management}>
          <textarea name="q" id="" cols="30" rows="10"></textarea>
          <button>Add post</button>
        </div>
        <div className={ProfileModuleStyle.posts__list}>
          <div className={ProfileModuleStyle.posts__item}>
            <div>
              <img src={avatar} alt="" />
              <h3>Multi Cat</h3>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <span>
              ✖
            </span>
          </div>
        </div>
      </div>
     );
}

export default Posts;