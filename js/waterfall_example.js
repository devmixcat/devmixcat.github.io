 var waterfall = document.getElementById("waterfall");
		 var flowItems = waterfall.querySelectorAll(".flow");
		 // 简单版（只兼容至IE9，宽度、列数固定）
		 // 共3列，每一列的宽度固定为310px，元素块之间的水平和垂直间距均为15px；瀑布流包含块的宽度为960px；
		 // 声明瀑布流中每一列高度的数组pin[]
		 var pin = [];
		 pin[0] = flowItems[0].offsetTop + flowItems[0].offsetHeight;
		 console.log("pin[0]:"+pin[0]);
		 pin[1] = flowItems[1].offsetTop + flowItems[1].offsetHeight;
		 console.log("pin[1]:"+pin[1]);
		 pin[2] = flowItems[2].offsetTop + flowItems[2].offsetHeight;
		 console.log("pin[2]:"+pin[2]);
		 console.log("pin:"+pin);
		 // 循环瀑布流元素的高度
		 for(var i = 0, len = flowItems.length; i < len; i++) {
		 	 console.log("#len:"+len);
		     if(i >= 3) {
		     	 console.log("#i:"+i);
		         // 获取三个数中的最小值
		         var minH = Math.min.apply(null, pin);
		         console.log("minH:"+minH);
		         // 获取高度数组中最小高度的索引
		         var minHItem = pin.indexOf(minH);
		         console.log("minHItem:"+minHItem);
		         // 把当前元素在视觉上置于最小高度的一列
		         console.log("#flowItems[i].style.left:"+flowItems[i].style.left);
		         console.log("#flowItems[i].style.top:"+flowItems[i].style.top);
		         flowItems[i].style.left = minHItem * (310 + 15) + "px";
		         flowItems[i].style.top = minH + 15 + "px";
		         console.log("@flowItems[i].style.left:"+flowItems[i].style.left);
		         console.log("@flowItems[i].style.top:"+flowItems[i].style.top);
		         // 重置列的高度
		         console.log("#pin[minHItem]:"+pin[minHItem]);
		         pin[minHItem] += flowItems[i].offsetHeight + 15;
		         console.log("@pin[minHItem]:"+pin[minHtem]);
		     }else if(i < 3){
		         flowItems[i].style.top = 0;
		         flowItems[i].style.left = (i % 3) * (310 + 15) + "px";
		     }
		 }