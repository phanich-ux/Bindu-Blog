firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      const db = firebase.firestore();
      const roleDoc = await db.collection("roles").doc(user.uid).get();
      if (!roleDoc.exists || roleDoc.data().role !== "admin") {
        alert("Access denied. Admins only.");
        window.location.href = "login.html";
      }
    } else {
      window.location.href = "login.html";
    }
  });
  
  const db = firebase.firestore();
  
  function createPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
  
    db.collection("posts").add({
      title,
      content,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      alert("Post created successfully");
    }).catch((err) => alert(err.message));
  }
  
  function editPost() {
    const postId = document.getElementById("postId").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
  
    db.collection("posts").doc(postId).set({
      title,
      content,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      alert("Post updated successfully");
    }).catch((err) => alert(err.message));
  }
  
  function deletePost() {
    const postId = document.getElementById("postId").value;
  
    db.collection("posts").doc(postId).delete()
      .then(() => {
        alert("Post deleted successfully");
      })
      .catch((err) => alert(err.message));
  }