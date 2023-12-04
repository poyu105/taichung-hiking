document.addEventListener("DOMContentLoaded",function(){
    
})

//card 優化(動態添加)
window.onload=function addCard(){
    //計算post-content子元素(card)個數
    var fatherEle=document.getElementById("post-content");//取得div, id=post-content 父元素
    var contentEle=fatherEle.getElementsByClassName("card");//取得fatherEle下的div, class=card子元素
    console.log("目前card數量: "+contentEle.length);//顯示contentEle長度(個數) (測試用) 
    
    //計算父/子元素寬度
    var container=document.getElementById("post-content");
    var containerWidth=parseFloat(container.offsetWidth);//container 的寬度
    
    var item=document.querySelector(".card");//獲取class="card"元素 
    var itemWidth=parseFloat(window.getComputedStyle(item,null).getPropertyValue("width"))+20;//item的寬度,20為card固定margin L/R

    console.log("containerWidth: "+containerWidth);
    console.log("itemWidth: "+itemWidth);

    //計算每一列(per-row)包含多少元素(card), count最終值-1
    var count=1;
    while(count<10){
        console.log("目前count為: "+count);
        console.log("itemWidth*count為: "+itemWidth*count)
        console.log("containerWidth為: "+containerWidth);
        
        if((itemWidth*count)>containerWidth){

            break;
        }
        else{
            count++;
        }
        //避免無窮迴圈, 預設只跑10次
        if(count>10){
            break;
        }
    }

    //判斷是否元素個數是否為滿版
    const sumOfCards=contentEle.length//card總數
    var missEle=false;
    if(sumOfCards%(count-1)!=0){
        missEle=true;
    }
    
    //增加card元素(非滿版)
    if(missEle){
        count--;//count最終值必須-1
        var missCount=0;//缺少元素(card)個數
        var tempSum=sumOfCards;//cp sumOfCards
        //計算缺少元素(card)個數
        for(i=1;(tempSum%count)!=0;i++){
            tempSum++;
            missCount=i;
        }

        console.log("missCount: "+missCount);
        
        //新增element
        for(i=0;i<missCount;i++){
            var cardDiv=document.createElement("div");
            cardDiv.setAttribute('class','card');
            cardDiv.textContent="test";
            var cardImg=document.createElement("img");
            cardImg.setAttribute('class','card-img-top');
            
            
            document.querySelector("#post-content").appendChild(cardDiv);
        }
    }


}