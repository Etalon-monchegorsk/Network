import { obnova } from '../index.js';
let Store = {
    posts: [
        { id: 0, text: "post1" },
        { id: 1, text: "post2" },
        { id: 2, text: "post3" },
        { id: 3, text: "post4" },
        { id: 4, text: "post5" }        
    ]
}

export function AddPost(postText) { //експортируем функцию AddPost и в момент запуска  принимает данные postText
    let newPost = {// создаем объект newPost
        id: "", 
        text: postText
    }
    Store.posts.unshift(newPost); //push добавляет в конец, unshift добавляет в начало. Добавляем в newPost в начало массива где хранятся все посты
    for (let i = 0; i < Store.posts.length; i++) {
        Store.posts[i].id = i;
    }
    obnova();
}
export function DeletePost() {
    let span;
    let deletePost = {

    }
}




export default Store;