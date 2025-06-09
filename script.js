// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiEwf18arR6Xyk9nZfZQYOcC6wdoVUOEw",
    authDomain: "myfirebase-1e6a1.firebaseapp.com",
    projectId: "myfirebase-1e6a1",
    storageBucket: "myfirebase-1e6a1.firebasestorage.app",
    messagingSenderId: "1007031887688",
    appId: "1:1007031887688:web:16e389eb4d77e53aa4757d",
    measurementId: "G-0D85JY3XZM"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({timestampsInSnapshots: true});

const collection = db.collection('posts');


collection.get().then(snapshot => {

const posts = [];
  snapshot.forEach(doc => {
    let post = {};
    post.title =  doc.data().title
    post.content =  doc.data().content
    post.timestamp = doc.data().timestamp
    posts.push(post);
  });
  let posts_section = document.getElementById("posts");
let _html = ""
posts.forEach(function(post){
     _html += `
    <article><p>${post.title}</P>
    ${post.content}
    </article>
    `
})

document.body.innerHTML = _html;

});