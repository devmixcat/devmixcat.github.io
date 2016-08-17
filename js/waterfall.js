var waterfallParent = document.getElementById("waterfall");
var flowItems = getClassName(waterfallParent, "flow");
// 瀑布流參數
// parent：瀑布流包裹容器，類型為DOM對象；
// floowItems：瀑布流布局子元素组，類型為DOM對象數組；
// pin：列數，類型為inDOM對象；
// floowItems：瀑布流布局子元素组，類型為DOM對象數組；
// pin：列數，類型為int；
// width：每個瀑布流布局元素的寬度，類型為int；
// horizontalMargin：元素塊之間的水平間距，類型為int；
// verticalMargin：元素塊之間的垂直間距，類型為int；
var currentFlow = {
    parent: waterfallParent,
    flowItems: flowItems,
    pin: 4,
    width: 458,
    horizontalMargin: 15,
    verticalMargin: 15
};
// 聲明響應式的響應斷點
var deviceWidth = {
    D: 1200,
    C: 960,
    B: 767,
    A: 320
};
// 响应式瀑布流布局绘制
window.onresize = responseFlow;
responseFlow();
function responseFlow() {
    var deviceW;
    // 判斷當前的設備螢幕寬度
    function checkDeviceW() {
        var screenW = document.documentElement.offsetWidth || document.body.offsetWidth;
        waterfallParent.style.width = screenW; 
        //console.log("#screenW:"+screenW);
        if(screenW >= deviceWidth.A && screenW < deviceWidth.B) {
            deviceW = "A";
        }else if(screenW >= deviceWidth.B && screenW < deviceWidth.C) {
            deviceW = "B";
        }else if(screenW >= deviceWidth.C && screenW < deviceWidth.D) {
            deviceW = "C";
        }else if(screenW >= deviceWidth.D) {
            deviceW = "D";
        }
    }
    checkDeviceW();
    // 修改不同響應下瀑布流布局的列數
    switch(deviceW) {
        case "A":
            currentFlow.pin = 1;
            break;
        case "B":
            currentFlow.pin = 2;
            break;
        case "C":
            currentFlow.pin = 3;
            break;
        case "D":
        	//console.log("#currentFlow.parent.offsetWidth:"+currentFlow.parent.offsetWidth);
        	//console.log("#currentFlow.width:"+currentFlow.width);
            currentFlow.pin = Math.floor(currentFlow.parent.offsetWidth / currentFlow.width);
            //console.log("#currentFlow.pin:"+currentFlow.pin);
            break;
    }
    // 瀑布流重繪
    waterfall(currentFlow);
}
// 其中flow是一个对象，分别包含如下鍵值：
// pin：列數，類型為int；
function waterfall(flow) {
    // 聲明瀑布流中每一列高度的數组pin[]
    var pin = new Array(flow.pin);
    // 瀑布流框塊數组
    var flowItems = flow.flowItems;
    // 聲明每一列高度的初始值
    for(var i = 0, pinLen = pin.length; i < pinLen; i++) {
        pin[i] = flowItems[i].offsetTop + flowItems[i].offsetHeight;
    }
    // 循環瀑布流元素的高度
    for(var i = 0, len = flowItems.length; i < len; i++) {
        if(flow.width) {
            flowItems[i].style.width = flow.width + "px";
        }
        if(i >= flow.pin) {
            // 獲取pin數組中的最小值
            var minH = Math.min.apply(null, pin);
            // 獲取高度数组中最小高度的索引
            var minHItem = pin.indexOf(minH);
            // 把當前元素在視覺上置于最小高度的一列
            flowItems[i].style.left = minHItem * (flow.width + flow.horizontalMargin) + "px";
            flowItems[i].style.top = minH + flow.verticalMargin + "px";
            // 重置列的高度
            pin[minHItem] += flowItems[i].offsetHeight + flow.verticalMargin;
        }else if(i < flow.pin){
            flowItems[i].style.top = 0;
            flowItems[i].style.left = (i % flow.pin) * (flow.width + flow.horizontalMargin) + "px";
        }
    }
    // 計算瀑布流容器的寬度
    flow.parent.style.width = flow.pin * flow.width + (flow.pin - 1) * flow.horizontalMargin + "px";
    $("footer").css("position","absolute");
}
// 獲取className的元素集合
// 參數：obj指父元素；oClassName為元素的class属性值
function getClassName(obj, oClassName) {
    // IE9+及標準瀏覽器可以直接使用getElementsByClassName()獲取className元素集合
    if(document.getElementsByClassName) {
        console.log("@@:"+obj.getElementsByClassName(oClassName));
        return obj.getElementsByClassName(oClassName);
    }else {
        // classNameArr用來裝載class属性值為oClassName的元素；
        var classNameArr = [];
        // 獲取obj的直接子元素
        var objChild = obj.children || obj.childNodes;
        //alert("@objChild:"+objChild);
        // 遍歷obj元素，獲取class属性值為oClassName的元素列表
        for(var i = 0; i < objChild.length; i++) {
            // 判斷obj子元素的class属性值中是否含有oClassName
            if( hasClassName(objChild[i], oClassName) ) {
                classNameArr.push(objChild[i]);
            }
        }
        //alert("@calssNameArr:"+classNameArr);
        return classNameArr;
    }
}
// Array.indexOf()函数的兼容性重寫
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(ele) {
        // 獲取數组長度
        var len = this.length;
        // 檢查值為數字的第二個參數是否存在，默認執為0
        var fromIndex = Number(arguments[1]) || 0;
        // 當第二個參數小於0時，為倒序查找，相當於查找索引值為該索引加上數组長度後的值
        if(fromIndex < 0) {
            fromIndex += len;
        }
        // 從fromIndex起循循環數組
        while(fromIndex < len) {
            // 檢查fromIndex是否存在且對應的數組元素是否等於ele
            if(fromIndex in this && this[fromIndex] === ele) {
                return fromIndex;
            }
            fromIndex++;
        }
        //當數組長度為0時返回不存在的信號：-1
        if (len === 0) {
            return -1;
        }
    }
}

$(document).ready(function(){
	$(".flowItem").find("h2").hide();
    $(".flowItem").find("p").hide();
    $(".flowItem").mouseover(function(){
        $(this).css("background","#fff");
        $(this).find("img").fadeOut("fast");
        $(this).find("h2").fadeIn("fast");
        $(this).find("p").fadeIn("fast");
    });

    $(".flowItem").mouseleave(function(){
        $(this).css("background","#f9f9f9");
        $(this).find("img").fadeIn("fast");
        $(this).find("h2").fadeOut("fast");
        $(this).find("p").fadeOut("fast");
    });
 });