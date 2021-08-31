// 댓글쓰기

function reviewSubmit() {
  const reviewInput = document.getElementById("detail-review-content")
  const reviewValue = reviewInput.value.trim()

  // 체크박스
  const reviewRadio = document.getElementsByClassName("detail-form-radio")
  for (let i =0; i<reviewRadio.length; i++){
    if(reviewValue && reviewRadio[i].checked === true){
      const date = new Date().toLocaleString()
  
      // console.log(date)
      // 날짜
      const commentDate = document.createElement("div")
      commentDate.classList.add("detail-comment-date")
      commentDate.innerText = date
      
      // console.log(commentDate)
  
      // 작성자
  
      // const commentWrite = document.createElement("div")
      // commentWrite.classList.add("detail-comment-writer")
      // commentWrite.innerText = reviewValue
  
      // 리뷰내용
  
      const commentReview = document.createElement("div")
      commentReview.classList.add("detail-comment-review")
      commentReview.innerText = reviewValue
  
      
      const createComment = document.getElementById("detail-comment-box")
      createComment.appendChild(commentReview)
      createComment.appendChild(commentDate)
  
      reviewInput.value = "";
    }
  }
}


// 댓글 삭제

function reviewDel(){
  console.log("나는 바보")
}