var w,h;

var bgColor;
var bgColorEven="rgb(87,186,255)";
var bgColorOdd="rgb(251,131,175)";
var data=[
 ["两周年快乐！宝宝！我们已经在一起度过了731个昼夜，我很珍惜和宝宝在一起的每一天，虽然我们也有过矛盾、不开心，但我始终坚信我们之间的感情不会被一点小矛盾击垮，而事实也是如我所想。",
    "在以后的每一天，我都会好好照顾我的宝宝，给你幸福和快乐！还记得这张图片吗？这是在某大学的河边，咱们相恋的第二天。2015-4-26"],
  ["紧接着才过了几天，我们便参加了中公的五一集训，而那时刚好也是你的生日，和我在一起的第一个生日",
    "这是我送的生日礼物之一，当时由于时间仓促，画的其实挺不好的，但是你收的时候还是非常开心，我心里也十分开心。",
    "当时有一天中午，我去了你的房间，我们第一次接吻也是那一天。",
    "上课的时候我画了一个我们的logo，后来好长一段时间我们都是用这个做头像",
    "回校之后咱们去吃了自助餐"],
  ["不要拍我！（端午节的时候去民耀路吃的村夫烤鱼。）","好小好小的小指甲。嘿嘿"],
  ["在备战期末的时候我病了，尿结石，你陪我去了医院，还好有你一直陪着我。后来就这么第一次见了我爸妈。"],
  ["归来之后除了好了期末事宜之后，我们去了上海动物园，这也是我们第一次严格意义上的出去玩",
    "拍票票也一直成为了我们的习惯",
    "最喜欢的剪刀手"],
  ["暑假咱们去了云瓣，虽然你很不喜欢那里，但那里也确实让我们学习到了很多。"],
  ["暑假去我爸妈那之前我们去了上海水族馆。",
    "咱们买的两个纪念品，剪刀手x2。",
    "在外滩转了一圈的合照之一"],
  ["紧接着咱们就去了浙江，去了南浔古镇转了一圈",
    "可惜我那天感冒了，而且天气好像下了点雨。剪刀手x3",
    "桥上的合照",
    "第二天晚上，咱们去广场玩，玩套娃娃送的几个玩具。当时你还跳了广场舞，咱们一起合唱了因为爱情"],
  ["马上我就把你送上了回家的火车，心里很是不舍。宝宝回去找姐妹们玩了",
    "不久我也回家了"],
  ["回校后你因为我最后还是选择了考研，我知道你有很大的一个因素是陪着我，我很感动",
    "你买的一件新裙裤",
    "复习很累，压力很大，但是我们也经常出去散散步缓一缓，你说最喜欢我们这张合照，说我像花一样伸展开来",
    "摆poss，我美不美？",
    "那段时间真的很不容易，咱们携手挺了过来",
    "食堂的早餐。我很喜欢这张图",
    "认真复习in..，不要恶作剧"],
  ["复习的时间过的也很快，转眼就到了考试的日子",
    "我用奖学金买的圣诞礼物，一个苹果，当时可以看出你的惊喜，我很满足"],
  ["考研结束了，一身轻松。我们去了杜莎夫人蜡像馆玩耍。扮演一个小太监，嘿嘿...",
    "看我弹琴的姿势怎么样？"],
  ["马上寒假到了，我把你送上了火车",
    "目送着火车离去，心里很是不舍，直到火车消失在视野里我才独自回校",
    "宝宝家里的生活，和妹妹的合照。妹妹剪刀手X1",
    "我家里下雪了，在家里很想宝宝"],
  ["马上寒假过去了，回校之后我们便准备开始找实习了，然后就到了微创。每天上下班都会路过的交大",
    "微创对面的微软",
    "新买的背带裤。剪刀手X4",
    "微创大厦",
    "偶尔回学校时候去宝龙吃的烤鱼"],
  ["很快又到了五一，也就是你的生日，由于在实习还要赶着做毕设，咱们只是随便吃了个饭，当时咱们还闹了一次大矛盾，都怪我不好",
    "回校在川菜馆吃的烤鱼"],
  ["毕设答辩前夕咱们都去做了头发","西食堂门口我给你拍照看看效果"],
  ["毕业终于来了，先合照一张",
    "和小郭的合照，帮你整理帽子",
    "和同学的合照，剪刀手X5"],
  ["那时你已经换了新工作，搬去了南翔，这是在医院体检时拍的",
    "暑假又到了，我回家十来天，你给我发的照片",
    "当时你和万佳相处的也不是很好，很多时候都是一个人住"],
  ["我很快便回来帮你搬家，后来我们就住到了嘉定，也就是现在住的地方",
    "蓝蓝的天空。为了我，你搬到了离我学校很近的地方",
    "4号楼下。剪刀手X"],
  ["后来我开学了，你第一次去了我的学校，咱们一起看了电影",
    "再次去学校，看到了美丽的黑天鹅，上一次太匆忙没有好好走一走",
    "黑天鹅看这边呀"],
  ["再后来就是十一了，妹妹来了，咱们三个人去了野生动物园",
    "大象你好",
    "长颈鹿你好",
    "第二天咱们去跟你的同学聚餐了，还唱了ktv"],
  ["我的寒假很快到了，而宝宝要上班，给我发的自拍",
    "后来宝宝也回家过年啦",
    "与姐妹们一起去滑雪"],
  ["年很快过完了，咱们又回来了，给我买的奶牛睡衣",
    "尝试做可乐鸡翅",
    "和妹妹一起换新手机"],
  ["后来咱们去了佘山，绑一个小马尾",
    "山顶上的合照"],
  ["满满的合照",
    "我只选了其中的一部分",
    "这里是咱们所有电影票和门票，有些电影票咱们可能没有拍。宝宝，我会一直对你好的，相信我，我爱你老婆！两周年快乐！"]
];
var title=[
  "1.宝宝，咱们两周年了！",
  "2.五一集训",
  "3.端午节吃烤鱼",
  "4.尿结石",
  "5.上海动物园之旅",
  "6.云瓣实习",
  "7.上海水族馆之旅",
  "8.浙江之旅",
  "9.宝宝回家了",
  "10.难熬的考研",
  "11.考研进行时",
  "12.杜莎夫人蜡像馆之旅",
  "13.寒假到了",
  "14.微创与闵行",
  "15.第二个生日",
  "16.换个发型",
  "17.我们毕业了",
  "18.南翔",
  "19.嘉定",
  "20.学校之行",
  "21.野生动物园之旅",
  "22.上班的第一个春节",
  "23.嘉定的生活",
  "24.佘山之旅",
  "25.宝宝，我爱你"
];
var pageIndex=0;
var imgIndex=0;
var pageNum=data.length;
J.ready(function(){
  h=J.height();
  w=J.width();
  J.id("validate").css({
    width:w+"px",
    height:h+"px"
  });
  J.id("startBtn").clk(function(){
    var value=this.prev().child(0).val();
    if(value=="0503"){
      J.id("validate").fadeOut();
      start();
    }else{
      J.show("密码错误","error");
    }
  })
});
function start(){
  if(J.isMobile()){
    document.addEventListener('touchstart',touch, false);  
    document.addEventListener('touchmove',touch, false);  
    document.addEventListener('touchend',touch, false);  
  }else{
    document.onmousewheel=pcWheel;
  }
  J.id("musicBtn").show().clk(changeMusic);
  playMusic();
  var wrapper=J.id("pageWrapper");
  data.each(function(item,i){
    wrapper.append(geneSinglePage(item,i));
  })
  J.class("page").css("height",h+"px");
  J.class("p-img-wrapper").css("width",w+"px");
  J.class("p-scrollbar").each(function(item){
    item.css("width",(item.child().length*w)+"px");
  });
  var height=Math.floor(h/pageNum);
  for(var i=0;i<pageNum;i++){
    var s="odd";
    if(i%2==0){
      s="even";
    }
    if(i==0){
      s+=" active";
    }
    J.id("pageItems").append('<div class="page-item '+s+'" onclick="changePage(this)"  style="height:'+height+'px;line-height:'+height+'px">'+(i+1)+'</div>');
  }
  J.id("pageItems").css({
    height:h+"px",
    "padding-top":((h-height*pageNum)/2)+"px"
  });
  wrapper.show();
  J.class("page").css("height",h+"px");
  setTimeout(function(){
    showContent();
  },300);
  if(!J.isMobile()){
    J.class("p-scrollbar").on({
      "mousemove":"changeCursor(this,event)",
      "click":"changePcImg(this)"
    });
  }
}
function changeCursor(obj,event){
  var dirc=obj.data("dirc");
  if(event.clientX>w/2){
    if(dirc!="right"){
      obj.data("dirc","right");
      obj.css("cursor","url(assets/images/arrow_right.png),auto");
    }
  }else{
    if(dirc!="left"){
      obj.data("dirc","left");
      obj.css("cursor","url(assets/images/arrow_left.png),auto");
    }
  }
}
function changePcImg(obj){
  if(obj.data("dirc")=="right"){
    left();
  }else{
    right();
  }
}
function pcWheel(event){
  event.preventDefault();
  if(canMove){
    canMove=false;
    if(event.deltaY>0){
      up();
    }else{
      down();
    }
    setTimeout(function(){canMove=true},500);
  }
}
function showContent(){
  J.id("pageWrapper").child(pageIndex).findClass("p-scrollbar").child(imgIndex).child().addClass("show");
}
function hideContent(){
  J.id("pageWrapper").child(pageIndex).findClass("p-scrollbar").child(imgIndex).child().removeClass("show");
}
function changePage(obj){
  active(obj);
  var i=obj.index();
  hideContent();
  pageIndex=i;
  checkBgColor();
  J.id("pageWrapper").css({
    "top":(-i*h)+"px",
    "background-color":bgColor
  });
  imgIndex=J.class("p-point-w")[pageIndex].findClass("active").index();
  showContent();
}
function changeImg(obj){
  active(obj);
  hideContent();
  var i=obj.index();
  imgIndex=i;
  J.class("p-scrollbar")[pageIndex].css("left",(-i*w)+"px");
  showContent();
}
var classes=["top","right","left","bottom","rotate1","rotate2"]
function geneSinglePage(item,i){
  var a="";
  var s='<div class="page">\
        <div class="p-head">\
          <div class="p-title">'+title[i]+'</div>\
        </div>\
        <div class="p-scroll-wrapper">\
          <div class="p-scrollbar">';
          a+='<div class="p-point-w">';
          item.each(function(contItem,j){
            var cls1=classes[J.random(0,classes.length-1)];
            var cls2=classes[J.random(0,classes.length-1)];
            s+='<div class="p-img-wrapper">\
              <div class="p-content '+cls1+'">'+contItem+'</div>\
              <div class="p-img '+cls2+'"><div class="p-img-div" style= "background-image:url(\'assets/images/'+(i+1)+'-'+(j+1)+'.JPG\')"></div></div>\
            </div>';
            var act="";
            if(j==0){
              act=" active";
            }
            a+='<span class="p-point'+act+'" onclick="changeImg(this)" style="background-color:'+checkColor(i)+'">'+(j+1)+'</span>';
          });
          s+="</div></div>"+a+"</div></div>";
        
  return s;
}
function active(obj){
  obj.parent().findClass('active').removeClass('active');
  obj.addClass('active');
}
window.onresize=function(){
  
}
function right(){
  if(imgIndex>0){
    hideContent()
    imgIndex--;
    J.class("p-scrollbar")[pageIndex].css("left","+="+w+"px")
    active(J.class("p-point-w")[pageIndex].child()[imgIndex]);
    showContent();
  }else{
    J.show("已经是第一张！","warn")
  }
}
function left(){
  if(imgIndex<data[pageIndex].length-1){
    hideContent()
    imgIndex++;
    J.class("p-scrollbar")[pageIndex].css("left","-="+w+"px");
    active(J.class("p-point-w")[pageIndex].child()[imgIndex]);
    showContent();
  }else{
    J.show("已经是最后一张！","warn")
  }
}
function up(){
  if(pageIndex<pageNum-1){
    hideContent()
    pageIndex++;
    upDownCom("-="+h);
    showContent();
  }else{
    J.show("已经到底啦！","warn")
  }
}
function down(){
  if(pageIndex>0){
    hideContent()
    pageIndex--;
    upDownCom("+="+h);
    showContent();
  }else{
    J.show("已经到顶啦！","warn")
  }
}
function upDownCom(t){
  checkBgColor();
  J.id("pageWrapper").css({
    "top":t+"px",
    "background-color":bgColor
  });
  active(J.id("pageItems").child(pageIndex));
  imgIndex=J.class("p-point-w")[pageIndex].findClass("active").index();
}
function checkColor(i){
  if(i%2==0){
    return bgColorOdd;
  }else{
    return bgColorEven;
  }
}
function checkBgColor(){
  if(pageIndex%2==0){
    bgColor=bgColorEven;
  }else{
    bgColor=bgColorOdd;
  }
}
var startY,moveY,canMove=true;
var startX,moveX;
function touch (event) {  
  var event = event || window.event;  
  var oInp = document.getElementById("inp");  
  switch(event.type){  
    case "touchstart":  
      startY = event.touches[0].clientY;  
      startX = event.touches[0].clientX;  
      break;
    case "touchmove":  
      event.preventDefault();  
      moveY = event.touches[0].clientY;  
      moveX = event.touches[0].clientX;  
      if(canMove)
      if(Math.abs(moveY - startY)>30){
        canMove=false;
        if (moveY > startY) {  
          down();  
        } else {  
          up();
        }  
        setTimeout(function(){canMove=true;},500)
      }else if(Math.abs(moveX - startX)>30){
        canMove=false;
        if (moveX > startX) {  
          right();
        } else {  
          left();
        }  
        setTimeout(function(){canMove=true;},500)
      }
      break;  
    default:;break;
  }  
} 
var musicOn=true;
var t;
function playMusic(){
  J.id("musicBtn").addClass("spin");
  J.id("music").play();
  musicOn=true;
}
function pauseMusic(){
  J.id("music").pause();
  J.id("musicBtn").removeClass("spin");
  musicOn=false;
}
function changeMusic(){
  if(musicOn){
    pauseMusic()
  }else{
    playMusic();
  }
}
window.onkeydown=function(event){
  if(event.keyCode==40){
    event.preventDefault();
    down();
  }else if(event.keyCode==38){
    event.preventDefault();
    up();
  }
}
window.onmousewheel=function(event){
  //event.preventDefault();
}