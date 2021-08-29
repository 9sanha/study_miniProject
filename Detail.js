
const btn = document.getElementById("detail-review-btn")
const reivew = document.getElementById("detail-review-input")


function toggleBtn () {
  if (reivew.style.display == "none"){
    reivew.style.display = "block"
  }else{
    reivew.style.display = "none"
  }
}