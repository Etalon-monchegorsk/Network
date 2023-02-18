import React from "react";
import ProfileModuleStyle from '../../Profile.module.css';
import avatar from '../../../../img/multiCat.png';

function Post(props) {
    return (
        <div className={ProfileModuleStyle.posts__item} id={props.id}>
            <div>
                <img src={avatar} alt="" />
                <h3>Multi Cat</h3>
            </div>
            <p>
                {props.text}
            </p>
            <span>
                ✖
            </span>
        </div>
    );
}

export default Post;