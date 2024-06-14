

let timer;
let ele = document.getElementById('time_div')


let sec = 0;
let min = 0;
timer = setInterval(()=>{
  ele.innerHTML = min +':'+sec;
  sec ++;
if (sec>= 60){
  sec = 0;
  min+= 1
}


},1000)

