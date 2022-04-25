function ChangeColor(){
  document.body.style.backgroundColor=genRandomColor();
}

let myarray=[]

function genRandomColor(){
  let r=0,g=0,b=0;
  r=Math.round(Math.random()*255);
  g=Math.round(Math.random()*255);
  b=Math.round(Math.random()*255);
  myarray.push(r, g, b)
  console.log(myarray)
    return "rgb("+r+","+g+","+b+")";
  
}
