document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username-input");
  const commentInput = document.getElementById("comment-input");
  const attendanceSelect = document.getElementById("attendance");
  const submitComment = document.getElementById("submit-comment");
  const commentsContainer = document.getElementById("comments-container");

  loadComments();

  submitComment.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const commentText = commentInput.value.trim();
    const attendance = attendanceSelect.value;

    if (username === "") {
      alert("Masukkan Nama Anda");
      return;
    }

    if (commentText === "") {
      alert("Masukkan Pesan Anda");
      return;
    }

    const commentId = Date.now().toString(); // Unique ID for each comment
    const comment = {
      id: commentId,
      username: username,
      text: commentText,
      attendance: attendance,
    };

    addComment(comment);
    saveComment(comment);
    commentInput.value = "";
  });

  function loadComments() {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach((comment) => addComment(comment));
  }

  function addComment(comment) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
              <strong>${comment.username}</strong>
              <p>${comment.text}</p>
              <p>${comment.attendance}</p>
          `;
    commentsContainer.appendChild(commentElement);
  }

  function saveComment(comment) {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
  }
});
