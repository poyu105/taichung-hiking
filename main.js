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