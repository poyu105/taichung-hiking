// window.onload = function () {
//   // addCard();
//   getData();
//   // setInterval(getData, 30000);
// };

//card優化(動態添加) ***勿刪***
// function addCard() {
//   //計算post-content子元素(card)個數
//   var fatherEle = document.getElementById("post-content"); //取得div, id=post-content 父元素
//   var contentEle = fatherEle.getElementsByClassName("card"); //取得fatherEle下的div, class=card子元素
//   console.log("目前card數量: " + contentEle.length); //顯示contentEle長度(個數) (測試用)

//   //計算父/子元素寬度
//   var container = document.getElementById("post-content");
//   var containerWidth = parseFloat(container.offsetWidth); //container 的寬度

//   var item = document.querySelector(".card"); //獲取class="card"元素
//   var itemWidth =
//     parseFloat(window.getComputedStyle(item, null).getPropertyValue("width")) +
//     20; //item的寬度,20為card固定margin L/R

//   console.log("containerWidth: " + containerWidth);
//   console.log("itemWidth: " + itemWidth);

//   //計算每一列(per-row)包含多少元素(card), count最終值-1
//   var count = 1;
//   while (count < 10) {
//     console.log("目前count為: " + count);
//     console.log("itemWidth*count為: " + itemWidth * count);
//     console.log("containerWidth為: " + containerWidth);

//     if (itemWidth * count > containerWidth) {
//       break;
//     } else {
//       count++;
//     }
//     //避免無窮迴圈, 預設只跑10次
//     if (count > 10) {
//       break;
//     }
//   }

//   //判斷是否元素個數是否為滿版
//   const sumOfCards = contentEle.length; //card總數
//   var missEle = false;
//   if (sumOfCards % (count - 1) != 0) {
//     missEle = true;
//   }
//   //增加card元素(非滿版時執行)
//   if (missEle) {
//     count--; //count最終值必須-1
//     var missCount = 0; //缺少元素(card)個數
//     var tempSum = sumOfCards; //cp sumOfCards
//     //計算缺少元素(card)個數
//     for (i = 1; tempSum % count != 0; i++) {
//       tempSum++;
//       missCount = i;
//     }
//     console.log("missCount: " + missCount);
//     //新增element
//     for (i = 0; i < missCount; i++) {
//       var cardDiv = document.createElement("div");
//       cardDiv.setAttribute("class", "card");
//       cardDiv.innerHTML = `<img src="..." class="card-img-top" alt="...">
//             <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             </div>
//             <ul class="list-group list-group-flush">
//             <li class="list-group-item">An item</li>
//             <li class="list-group-item">A second item</li>
//             <li class="list-group-item">A third item</li>
//             </ul>
//             <div class="card-body">
//             <a href="#" class="card-link">Card link</a>
//             <a href="#" class="card-link">Another link</a>
//             </div>`;
//       document.getElementById("post-content").appendChild(cardDiv);
//     }
//   }
// }

//頁面載入時執行
// //時時監聽視窗比例
// window.addEventListener("load", function () {
//   let lastPixelRatio = window.innerWidth;
//   window.addEventListener("resize", function () {
//     let currentPixelRatio = window.innerWidth;
//     if (currentPixelRatio != lastPixelRatio) {
//       addCard();
//       lastPixelRatio = currentPixelRatio;
//     }
//   });
// });

//card優化2(動態添加，連接json) ***勿刪***  https://israynotarray.com/javascript/20190505/1432256317/

/*

    此區放連接json的code

*/

//計算每頁放的資料筆數
//將json讀入的data傳至此function並執行
/*
function pageination(data){
    const dataTotal=data.length;//取得資料長度

    const perpage=document.getElementById("dataselect").value;//每頁預計顯示資料量，預設8筆 !!預計從html拉取!!

    //計算所需的page數量 總資料數量 / 每一頁要顯示的資料 (須無條件進位)
    const pageTotal = Math.ceil(dataTotal / perpage);

    console.log("全部資料量: "+dataTotal);
    console.log("每頁顯示數量: "+perpage);
    console.loq("總頁數: "+pageTotal);

    // 當前頁數
    let currentPage = 2;  
    //避免當前頁數筆總頁數還要多
    if (currentPage > pageTotal) {
        currentPage = pageTotal;
    }

    //切換頁面，則重新吐資料
    const minData = (currentPage * perpage) - perpage + 1 ;
    const maxData = (currentPage * perpage) ;

    const data = [];
    
    //123jsonData名稱依照json_code修改!
    123jsonData.forEach((item, index) => {
    
        const num = index + 1;
        // 當num比minData大且又小於maxData就push進新陣列
        if ( num >= minData && num <= maxData) {
            data.push(item);
        }
    })

    displayData(data);
}

function displayData(data) {
    //顯示資料
    const content=getElementById("post-content");
    let str = '';
    data.forEach((item) => {
      str += 
        `<div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
            </div>
        </div>`;
    });
    content.innerHTML = str;

    //顯示分頁數
    const pageid = document.getElementById("post-footer");



}
*/
//取得資料
function getData() {
  $.ajax({
    url: "./臺中市健行步道資料1120915(修增加經緯度).json",
    method: "GET",
    data: {

    },
    dataType: "json",
    async: true,
    success: function (data) {
      let trails = data.trails;
      let dataLengths = trails.length;
      //初始化卡片
      $("#post-content").empty();
      for (let i = 0; i < dataLengths; i++) {
        let cardDiv1 = $("<div>").addClass("card");
        let cardImg = $("<img>")
          .addClass("card-img-top")
          .attr("src", trails[i]["picture"]);
        let cardDiv2 = $("<div>").addClass("card-body");
        let cardTitle = $("<h5>")
          .addClass("card-title")
          .html(trails[i]["trailName"]);
        let cardUl = $("<ul>").addClass("list-group list-group-flush");
        let cardLi1 = $("<li>")
          .addClass("list-group-item Area")
          .html("地區：" + trails[i]["area"]);
        let cardLi2 = $("<li>")
          .addClass("list-group-item")
          .html(
            "經度：" + trails[i]["longitude"]+"<br>" +"緯度：" + trails[i]["latitude"]
          );
        let cardLi3 = $("<li>")
          .addClass("list-group-item Classification")
          .html("分類：" + trails[i]["classification"]);
        let cardLi4 = $("<li>")
          .addClass("list-group-item Level")
          .html("等級：" + trails[i]["level"]);
        let cardLi5 = $("<li>")
          .addClass("list-group-item")
          .html("設施：" + trails[i]["facilities"]);
        let cardLi6 = $("<li>")
          .addClass("list-group-item")
          .html("維護單位：" + trails[i]["maintenanceUnit"]);
        let cardLi7 = $("<li>")
          .addClass("list-group-item")
          .html("長度：" + trails[i]["length"]);
        let cardLi8 = $("<li>")
          .addClass("list-group-item")
          .html("評分：" + trails[i]["evaluate"]);
        cardUl.append(
          cardLi1,
          cardLi2,
          cardLi3,
          cardLi4,
          cardLi5,
          cardLi6,
          cardLi7,
          cardLi8
        );
        cardDiv2.append(cardTitle);
        cardDiv1.append(cardImg, cardDiv2, cardUl);
        $("#post-content").append(cardDiv1);
      }
    },
    error: function () {
      alert("error");
    },
  });
}
$(document).ready(function () {
  getData();
});

function update(selectedArea, selectedClassification, selectedLevel) {
  $('#post-content .card').each(function (){
    var cardArea = $(this).find('.Area').text();
    var cardClassification = $(this).find('.Classification').text();
    var cardLevel = $(this).find('.Level').text();

    if (selectedArea == "選擇地區" || cardArea.includes(selectedArea)) {
      if (selectedClassification == "選擇分類" || cardClassification.includes(selectedClassification)) {
        if (selectedLevel == "選擇等級" || cardLevel.includes(selectedLevel)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      } else {
        $(this).hide();
      }
    } else {
      $(this).hide();
    }
  });
}

$('select').change(function () {
  update($('#selectArea').find(':selected').text(),
  $('#selectClass').find(':selected').text(),
  $('#selectLv').find(':selected').text());
})