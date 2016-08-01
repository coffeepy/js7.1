

function like_toggle() {
  btn = document.getElementById('like-btn');
  console.log(btn.innerHTML);
  if (btn.innerHTML =="Like") {
    btn.innerHTML = "Unlike"
    btn.className = "unlike"
  }
  else {
    btn.innerHTML = "Like"
    btn.className = "like"
  };
}

document.getElementById('like-btn').addEventListener("click", like_toggle)
