// JavaScript Document					
					var index=0;
					var box = my$("box");
					 //获取相框
					 var inner = box.children[0];
					 //获取去相框的宽度
					 var imgWidth = inner.offsetWidth;
					 // 获取ul
					 var ulObj = inner.children[0];
					 //获取ul中所有的li
					 var list = ulObj.children;
					 //获取ol
					 var olObj = inner.children[1];
					 //获取焦点
					 var arr = my$("arr");

					 //小按钮通过按钮实现循环轮播
					 for (var i = 0; i < list.length; i++) 
					 {
					 var liObjs = document.createElement("li");
					 olObj.appendChild(liObjs);
					 liObjs.innerHTML = (i+1);
					 liObjs.setAttribute("index", i);
					 liObjs.onmouseover = function ()
					 {"use strict";
					  for (var j = 0; j < olObj.children.length; j++)
					  {
					  olObj.children[j].removeAttribute("class");
					  }

					  this.className = "current";

					  index = this.getAttribute("index");

					  animate(ulObj, -index * imgWidth); //移动动画函数
					 };
					 }

					 olObj.children[0].className = "current";
					 //克隆ol中第一个li放到最后一个
					 ulObj.appendChild(ulObj.children[0].cloneNode(true));

					 var timeId=setInterval(clickHandle,3000);
					 my$("box").onmouseover=function()
					 {"use strict";
					 arr.style.display="block";
					 clearInterval(timeId);
					 };
					 //点击右边按钮
					 my$("right").onclick=clickHandle;
					 function clickHandle() {"use strict";
					  if (index===ulObj.children.length-1)
					  {
					  ulObj.style.left=0+"px";
					  index=0;
					  }
					  index++;
					  animate(ulObj,-index*imgWidth);
					  if (index===list.length-1)
					  {
					  olObj.children[0].className="current";
					  olObj.children[olObj.children.length-1].className="";
					  }else {
					  for (var i=0;i<olObj.children.length;i++){
					   olObj.children[i].className="";
					  }
					  olObj.children[index].className="current";
					  }
					 }
					 //点击左边按钮
					 my$("left").onclick=function () {"use strict";
					  if (index===0){
					  index=list.length-1;
					  ulObj.style.left=-index*imgWidth+"px";
					  }
					  index--;
					  animate(ulObj,-index*imgWidth);
					  for (var i=0;i<olObj.children.length;i++){
					  olObj.children[i].className="";
					  }
					  olObj.children[index].className="current";
					 };

					 my$("box").onmouseout=function(){"use strict";
					 arr.style.display="none";
					 timeId=setInterval(clickHandle,3000);
					 };



					 // 设置一个元素，移动到指定位置
					 function animate(element, target) {"use strict";
							 clearInterval(element.timeId);
							 element.timeId = setInterval(function () {
					  var current = element.offsetLeft;
					  var step = 9;
					  step = current > target ? -step : step;
					  current += step;
					  if (Math.abs(target - current) > Math.abs(step)) {
					  element.style.left = current + "px";
					  } else {
					  clearInterval(element.timeId);
					  element.style.left = target + "px";
					  }
					 }, 10);
					 }
					 function my$(id) {"use strict";
					   return document.getElementById(id);
						}