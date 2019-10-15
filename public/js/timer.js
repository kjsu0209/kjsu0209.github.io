var timer = document.getElementById("ticker");
setInterval(function(){
    var date = new Date().toString();
    timer.innerText = date.slice(16, -21); 
}, 3000);

function HoverTimer(){
    timer.style.backgroundColor = '#' + (function co(lor){   return (lor +=
        [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
        && (lor.length == 6) ?  lor : co(lor); })('');
}