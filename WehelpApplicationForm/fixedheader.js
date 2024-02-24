document.addEventListener("DOMContentLoaded", function() {
    // 獲取 header 元素
    var header = document.querySelector("header");
    // 獲取 header 的高度
    var headerHeight = header.offsetHeight;
    // 將 header 的高度應用到 body 的 margin-top 上
    document.body.style.marginTop = headerHeight + "px";
  });