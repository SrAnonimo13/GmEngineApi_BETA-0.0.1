let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
let key
let allElements = [];

function createCanvas(h,w){
    canvas.height = h;
    canvas.width = w;
    document.body.appendChild(canvas)
}
    
function background(c){
    canvas.style = `background-color: ${c};`
}

function createElement(h,w,x,y,type,color,id,r){
    allElements.push({h:h,w:w,x:x,y:y,t:type,c:color,id:id,r:r})
}

function deleteElement(id){
    allElements.splice(allElements.map((e)=>{return e.id}).indexOf(id), 1)
}

function ILoadElement(data){
    switch(data.t){
        case "box":
            ctx.fillRect(data.x,data.y,data.w,data.h)
            ctx.fillStyle = data.c
            break;
        case "circle":
            ctx.beginPath();
            ctx.arc(data.x, data.y, data.r||15, 0, 6, false);
            ctx.fillStyle = data.c;
            ctx.fill()
            break;
        default:
            console.log("error")
            break;
    }
}

function clearScreen(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}


setInterval(()=>{
    clearScreen()
    allElements.forEach(element=>{ILoadElement(element)});
}, 10)