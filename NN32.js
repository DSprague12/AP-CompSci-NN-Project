
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
var width=window.innerWidth;
var height=window.innerHeight;;
console.log(2);
ctx.fillStyle = "red";
ctx.fillRect(0, 0, width, height);
/*

const options = {
    inputs:3,
    outputs:1,
    task: 'regression',
}
let nn=ml5.neuralNetwork(options);;
//println(1)
const modelInfo = {
  model: 'Code/model.json',
  metadata: 'Code/model_meta.json',
  weights: 'Code/model.weights.bin',
};
nn.load(modelInfo, complete);

var y;
var results;

function predict(){
  nn.predict(input, handleResults);
}
function handleResults(error, result) {
    if(error){
      console.error(error);
      return;
    }else{
        y=result[0].nextYP;
        //console.log(y);
        //list.push(y);
    }
}
var i=0;
y=Math.random()*400;
var cir=[200,y];
var list=[];
var input= {
    prevYP: y,
    yP: y,
    time:0
}
var iYP=y;


var j=0;
//println(y);
function complete(){
    //for(var j=0; j<10;j++){
        input={
            prevYP:iYP,
            yP:y,
            time:j
        }
        predict();
        iYP=y;
        j+=0.1;
        cir=[200,y];
        ctx.arc(cir[0],cir[1],10,0,2*Math.PI)
        ctx.stroke();

        //list.push(y);
        //console.log(y);
    //}
    //println(list);
    //setTimer(execute,50);
}

//setInterval(complete,10);*/
