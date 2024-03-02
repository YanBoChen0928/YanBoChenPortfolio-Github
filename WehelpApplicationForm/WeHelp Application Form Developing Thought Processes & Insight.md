# WeHelp Application Form 架設分階段實際思考流程與操作步驟 (2024.02.14～）

### 這裡是製作這個申請表單但還沒有寫好內容前，設想的架構，跟可能碰到的問題。因為有一題問到開發的技術心得，我想就一起藉 MD 檔的筆記來呈現。其實碰到問題，找尋解答、做出來的整個過程蠻有意思的！



1. 設定好 github remote repo 跟 local repo

2. 決定基本架構：固定title、照片、折疊式 Q&A

   1. 不確定的：怎麼固定title (header)

   2. 怎麼把title跟個人照片固定住，然後以下內容可以滑動？

      1. 有兩個做法：一個是設定下方的 top-margin（但是不知道height))

         1. 可以用 fn+F12 開啟，然後選擇element看得到。但是在RWD的話這樣就不方便。

      2. 或者交給JS進行，應該還是可以用在github靜態網頁的提交吧？（試看看）

         1. well done after add the following:

            ```!javascript
            document.addEventListener("DOMContentLoaded", function() {
                // 獲取 header 元素
                var header = document.querySelector("header");
                // 獲取 header 的高度
                var headerHeight = header.offsetHeight;
                // 將 header 的高度應用到 body 的 margin-top 上
                document.body.style.marginTop = headerHeight + "px";
              });
            ```

   3. 折疊Q&A 可能的做法

      ```!javascript
      <!-- Q&A 形式的內容 -->
          <div class="question" onclick="toggleAnswer('q1')">Q1：問題1</div>
          <div id="q1" class="answer">答案1</div>
      
          <div class="question" onclick="toggleAnswer('q2')">Q2：問題2</div>
          <div id="q2" class="answer">答案2</div>
      
          <!-- JavaScript 用於實現折疊效果 -->
          <script>
              function toggleAnswer(id) {
                  var answer = document.getElementById(id);
                  answer.style.display = (answer.style.display == 'block') ? 'none' : 'block';
              }
          </script>
      </body>
      </html>
      ```

3. 決定CSS細節樣式、並且輸入資料。

4. 測試看看靜態網頁 github page 

   1. 要測試兩個：一個是timeline

   2. 一個是 application form



## PS 延伸思考

+ ### 如果有兩個圖，想要對稱佈局、但是尺寸不同，可以怎麼做？

   ```!css
   .image-container {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* 自適應欄數，每欄最小寬度為 200px */
     grid-gap: 10px; /* 圖片之間的間距 */
   }
   
   .image-container img {
     max-width: 100%; /* 圖片寬度最大不超過容器寬度 */
     height: auto; 
   }
   
   /* 在 max-width 460px 以下时，將圖片佈局改為上下排列*/
   @media(max-width: 460px) {
     .image-container {
       display: block;
     }
   }
   ```

   ```html
   <div class="image-container">
     <img src="image1.jpg" alt="Image 1">
     <img src="image2.jpg" alt="Image 2">
   </div>
   ```