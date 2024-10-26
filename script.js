// 点赞功能
let isLiked = false;
function toggleLike() {
    const likeIcon = document.getElementById('likeIcon');
    if (!isLiked) {
        likeIcon.classList.add('liked');
        isLiked = true;
    } else {
        likeIcon.classList.remove('liked');
        isLiked = false;
    }
}

// 打开评论区
function openCommentSection() {
    const commentSection = document.getElementById('commentSection');
    commentSection.style.display = 'block';
}

// 关闭评论区
function closeCommentSection() {
    const commentSection = document.getElementById('commentSection');
    commentSection.style.display = 'none';
}

// 提交评论（模拟，这里只是简单打印）
function submitComment() {
    const commentText = document.querySelector('#commentSection textarea').value;
    console.log('提交评论：' + commentText);
    closeCommentSection();
}

// 打开分享区
function openShareSection() {
    const shareSection = document.getElementById('shareSection');
    shareSection.style.display = 'block';
}

// 打开分享区
function closeShareSection() {
    const shareSection = document.getElementById('shareSection');
    shareSection.style.display = 'none';
}
