var canvas = document.querySelector('canvas')
//for making the canvas have the same size we the following
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var elementFromCanvas = canvas.getContext('2d');
//elementFromCanvas.fillText("M41!");
/*
elementFromCanvas.fillStyle = 'red';
elementFromCanvas.fillRect(100,100,100,100);
elementFromCanvas.fillStyle = 'orange';
elementFromCanvas.fillRect(500,50,100,100);
elementFromCanvas.fillStyle = 'rgb(0, 255, 0, 0.5)';
elementFromCanvas.fillRect(400,500,100,100);

elementFromCanvas.beginPath();
elementFromCanvas.moveTo(50,300);
elementFromCanvas.lineTo(300, 100);
elementFromCanvas.lineTo(400, 300);
elementFromCanvas.strokeStyle = 'blue';
elementFromCanvas.lineTo(300, 400);
elementFromCanvas.stroke();
*/

/*
for(var index = 0; index < 41; index++){
  var xPosition = Math.random() * window.innerWidth;
  var yPosition = Math.random() * window.innerHeight;
}

*/
/*
*/
//colors no random
var colorArray = [
  '#005073',
  '#107dac',
  '#189ad3',
  '#1ebbd7',
  '#71c7ec',
];
//----------TO AVOID PROBLEMS WHEN RESIZE
window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});
//--------FOR ADD AN EVENT LISTENER
var maxRadius = 40;
//var minimumRadius = 2;
//----------
var mouse = {
  xCoordinate:undefined,
  yCoordinate:undefined
}
window.addEventListener('mousemove', function(event){
  mouse.xCoordinate = event.x;
  mouse.yCoordinate = event.y;
});

//javascript object
function Circle(xPosition, yPosition, xVelocity, yVelocity, radius) {
  this.xPosition = xPosition;
  this.yPosition = yPosition;
  this.xVelocity = xVelocity;
  this.yVelocity = yVelocity;
  this.radius = radius;
  this.colourValue = colorArray[Math.round(Math.random() * colorArray.length)];
  this.minimumRadius = radius;
  this.draw = function(){

    elementFromCanvas.beginPath();
    elementFromCanvas.arc(this.xPosition, this.yPosition, this.radius, 0, Math.PI *2, false);

    elementFromCanvas.fillStyle = '' + this.colourValue + '';
//    elementFromCanvas.fillStyle = 'rgb(235, 244, 250)';
//    elementFromCanvas.fillStyle = 'black';
    elementFromCanvas.fill();
  }
  this.update = function(){
    if((this.xPosition + this.radius > innerWidth) | this.xPosition - this.radius < 0)
      this.xVelocity *= -1;
    if((this.yPosition + this.radius > innerHeight) | this.yPosition - this.radius < 0)
      this.yVelocity *= -1;

    this.xPosition += this.xVelocity;
    this.yPosition += this.yVelocity;

    //the next is to calculate the mouse position from the balls' coordinate
    if(mouse.xCoordinate - this.xPosition < 50 && mouse.xCoordinate - this.xPosition > -50
       && mouse.yCoordinate - this.yPosition < 50 && mouse.yCoordinate - this.yPosition > -50)
       {
       if(this.radius < maxRadius)
         this.radius += 1;
       }
    else if(this.radius > this.minimumRadius)
      this.radius -=1;
    this.draw();
  }
}


//---------------------
CanvasRenderingContext2D.prototype.wrapText = function (text, x, y, maxWidth, lineHeight) {

    var lines = text.split("\n");

    for (var i = 0; i < lines.length; i++) {

        var words = lines[i].split(' ');
        var line = '';

        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = this.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                this.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else {
                line = testLine;
            }
        }

        this.fillText(line, x, y);
        y += lineHeight;
    }
};
//---------------------
function animateBall(){
  elementFromCanvas.clearRect(0, 0, innerWidth, innerHeight);
  console.log(circleArray[index]);
  var colourValueA = Math.round(Math.random() * 255);
  var colourValueB = Math.round(Math.random() * 255);
  var colourValueC = Math.round(Math.random() * 255);
  var colourValueD = Math.round(Math.random() * 255);
  elementFromCanvas.strokeStyle = 'rgb(' + colourValueA + ',' + colourValueB
  + ',' + colourValueC + ','
  + colourValueD + ')';
  elementFromCanvas.font = innerWidth*0.020 +'px Arial';
  console.log(innerWidth);
  //elementFromCanvas.strokeText(" ( ͡° ͜ʖ ͡°)",innerWidth/2 - innerWidth*0.5,innerHeight/2);
  elementFromCanvas.fillStyle = 'rgb(' + colourValueA + ',' + colourValueB
  + ',' + colourValueC + ','
  + colourValueD + ')';
  elementFromCanvas.wrapText('RESIZE THE TAB TO SEE BETTER OR USE SPLIT SCREENS LAYOUTS\n'+
'　　　 　 　 　 　 ／⌒ヽ\n' +
'　　　　　 　 　 / ,. ‐-ミ ＼　　 　 .　-‐…‐-　 .　 　 　 __\n' +
'.　　　　 　 　 / /　　　　＞ヽ　　　　　　　　　　　｀　＜＿}＿\n' +
'　　　　　 　 / /　 　 .　´　　　　　　　　　　　　　　　 　 ＼ 　 |\n' +
'.　　　　 　 / / 　 ／　　　　　　 　 　 　 　 　 　 ヽ　　　　 ヽ._|＿\n' +
"　　　　 　/ / 　 　 　 / / 　 　 　 |　　　　　　　　 ',　　　　　 ﾟ｡ 　}\n" +
". 　 　 　 ,　′ ′　　,　,　　　　|　l| 　 　 　 i　　 　 '.　 　 　 　 ',く\n" +
"　　　　　| | 　 i 　 ｌ　|　ﾄ､　　　|　l|　l|　| 　 |　　 　 i＿　　 　 　 . ＼\n" +
"　　　　　| | 　 |ｌ　 |　|　|　ﾟ.　　l|　l|　l|　|　　|ｌ　　　 |　　｀　､ 　　i_,ノ\n" +
".　　　　八{　　|{　 |　|　|　　､　l| 斗‐lﾄ､｢￣ |l　　　 |　 　 　 ＼　| ＼\n" +
"　　　 　 　 　 八　|i八_,{　 　＼{ヽ{,.斗≠ミ, |l　　　 |__　　　　　 ,:|_,ノ\n" +
"　　　　　　 　 　 Νヽ{ｘ=ﾐ　　 　 〃 んィﾊj}^l　　　 |ｒ　Y　 　 ノ.:.:r―-ミ\n" +
"　　　　 　 　 　 　 |　 {{ {心　　　 　 乂):ソ　|l　　　 |:):} |{-=彡/:.:ｉ|:.ヽ:.:.:.:.＼\n" +
"　　　　 　 　 　 　 |　　ｉ Vｿ　　　　　, , ,　　 |l　　　 |:ｿ 八 ,..:.:′ !|::.:.:.＼:.:.:.:.＼\n" +
"　　　　 　 　 　 　 |　|　＾´、　　　　　　　 　 |l　　　 |／.::彡{|:.:.:.:.八:.:.:.:.:.:.＼:.:.:.:.＼\n" +
"　　　　 　 　 　 　 |　|八'ﾞ　　　　　　,　　　　|l　　　 |「i .:.:.:.八:.:.:.:.:.:.:＼:.:.:.:.:.:.:.:.:.:.:.:ﾉ\n"+
"　　　　 　 　 　 　 |　|　　 　 ｀ 　 　 　 　 　 |　　　 八| :.:.:.:.:.:.`ﾄ､:.:.:.:.:. ＼:.:.:.:.:.:／\n"+
"　　　　 　 　 　 　 |　|l　　　ﾄ､　　　　　　　..:|　 　　　 |:.:.:.:.:.:.:.:.|　＼:.:.:.:.:.:.:.ーく\n"+
"　　　　 　 　 　 　 |l八　 　 |　　 __　　 ＜　 |　　/´￣￣ }､ :.:.:|　 　 ーｧ:.:.:.:.:.:.:.}\n"+
".　　　 　 　 　 　 八　|＼　 |　　　　　 | ,　　И /:――‐く　｀¨´　　　 /:.:.:.:.:.:.:.:/\n"+
".　　　 　 　 　 　 　 Ⅵ　 ＼{　　　　 ／　_ ノ j/:.:.:.:.:.:＿_:.ヽ,..-‐…:.:.´:.:.:.:.:.:.／\n"+
"　　　　　　　　　　　　　　　　　　　ハ　 |:.:.:.: /:.:.:.:／＿／:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.／\n"+
"　　　　　　　　　　　　　　　　 　／:.:.:.}　|:.:.:.:.:.:.:.:/ / ／ :.:.:.:.:.:.:.:.:.:.:.:.:.:／\n"+
"　　　　　　　　　　　　,..-‐….:.:´.:.:.:.:.｢ ノ:.:.:.:.::／／/:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:./\n"+
"\nCREDITS TO: asciiart                                                                  M41"
,innerWidth/2 - innerWidth*0.45, innerHeight*0.19, innerWidth, innerHeight*0.021);
  elementFromCanvas.stroke();
  for(var index = 0; index < circleArray.length; index++)
    circleArray[index].update();
  requestAnimationFrame(animateBall);
}
var circleArray = [];
function init(){
  circleArray = [];
  for(var numberOfCircles = 0; numberOfCircles < 1000; numberOfCircles++) {
    console.log('error');
    var radius = Math.random() * 3 + 1;
    var xPosition = Math.random() * (innerWidth - radius * 2) + radius;
    var yPosition = Math.random() * (innerHeight - radius * 2) + radius;
    var velocityX = (Math.random() - 0.5) * 2;
    var velocityY = (Math.random() - 0.5) * 2;
    circleArray.push(new Circle(xPosition, yPosition, velocityX, velocityY, radius));
  }
}
init();
animateBall();
