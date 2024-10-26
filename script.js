// 使用事件委托处理交互元素的点击事件
document.addEventListener('DOMContentLoaded', function () {
    const interactionButtons = document.querySelector('.interaction - buttons');
    const likeIcon = document.querySelector('.like - icon');
    const watchIcon = document.querySelector('.watch - icon');
    const commentIcon = document.querySelector('.comment - icon');
    const shareIcons = document.querySelectorAll('.share - buttons img');

    interactionButtons.addEventListener('click', function (event) {
        if (event.target === likeIcon) {
            // 处理点赞点击事件
            console.log('点赞被点击');
        } else if (event.target === watchIcon) {
            // 处理在看点击事件
            console.log('在看被点击');
        } else if (event.target === commentIcon) {
            // 处理评论点击事件
            console.log('评论被点击');
        } else {
            for (let i = 0; i < shareIcons.length; i++) {
                if (event.target === shareIcons[i]) {
                    // 处理分享点击事件，这里可以根据不同图标做不同分享逻辑
                    console.log('分享被点击：' + i);
                    break;
                }
            }
        }
    });

    const text = document.getElementById('color - changing - text');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let index = 0;
    setInterval(() => {
        text.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);
});
