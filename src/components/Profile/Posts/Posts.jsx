import React from "react";
import ProfileModuleStyle from '../Profile.module.css';
import Post from "./Post/Post";
import Store from "../../../State/State";

function Posts(props) {  // функциональная компонента Posts которая принимает во внутрь себя props
  let textareaObject; //создаем глобальную переменную textareaObject и оставляем ее пустой 
  let textareaFocus = (e) => {//функция которая запускается при фокусе на textarea(или при нажатии)
    textareaObject = e.target; //то на что мы нажали это тег textarea помещаем этот тег во внутрь переменной textareaObject
  }
  let newPost = () => { // создаем функцию которая запускается при нажатии на кнопку Add post 
    if (textareaObject) {// если переменная textareaObject не пустая коробка
      if (textareaObject.value == "") {// если textarea пустая
        alert("Введите сообщение для поста!"); 
      }
      else {// иначе если в textarea есть текст
        props.AddPost(textareaObject.value);// запускаем функцию AddPost которую получили из props и передаем вместе с запуском функции то, что написано в textarea
        textareaObject.value = "";
      }
    } 
  }
  function newPostEnter(e) {    
    if (e.code === "Enter" && !e.shiftKey) {
      if (textareaObject.value == "") {
        textareaObject.blur();
        textareaObject.value = "";
        alert("Введите сообщение для поста!")              
      }
      else {
        props.AddPost(textareaObject.value);
        textareaObject.blur();
        textareaObject.value = "";     
      }
      
    }
  }
    return ( 
        <div className={ProfileModuleStyle.posts}>
        <h2>My posts</h2>
        <div className={ProfileModuleStyle.posts__management}>
          <textarea onFocus={textareaFocus} onKeyDown={newPostEnter} name="q" id="" cols="30" rows="10" />
          <button id="buttonAdd" onClick={newPost}>Add post</button>
        </div>
        <div className={ProfileModuleStyle.posts__list}>
          {Store.posts.map(post=> <Post key={post.id} id={post.id} text={post.text}/> )}
        </div>
      </div>
     );
}
// дз написать условие чтобы функция AddPost запускалась только если в textarea есть текст
export default Posts;