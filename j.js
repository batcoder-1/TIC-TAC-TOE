let boxes=document.querySelectorAll(".grid");
let rstbtn=document.querySelector("#reset");
let gamecontainer=document.querySelector(".game-container")
let count=0;
let won=false;
const pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
]
function winner(){
for(let i=0;i<8;i++){
    let p1=boxes[pattern[i][0]].innerText;
    let p2=boxes[pattern[i][1]].innerText;
    let p3=boxes[pattern[i][2]].innerText;
    if(p1!=''&&p2!=''&&p3!=''){
    if(p1==p2&&p1==p3){
        let txt=document.createElement("p");
        txt.innerText=`Winner is ${p1}`
        txt.style.height='30px';
        txt.style.fontWeight='bold'
        txt.setAttribute("id","msg");
        gamecontainer.prepend(txt);
        disableboxes();
        won=true;
        return;
    }
}
}
 let nonempty=0;
        boxes.forEach((box)=>{
          if(box.innerText!=''){
            nonempty++;
          }
        });
    if(nonempty==9&&!won){
         let txt=document.createElement("p");
        txt.innerText="Draw"
        txt.style.height='30px';
        txt.style.fontWeight='bold'
        txt.setAttribute("id","msg");
        gamecontainer.prepend(txt);
        disableboxes();
    }
};
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
count++;
if(count%2!=0){
   box.innerText="X";
}
else{
    box.innerText="O";
}
box.disabled=true;
winner();
})
});
rstbtn.addEventListener("click",()=>{
    count=0;
    won=false;
    boxes.forEach((box)=>{
        box.innerText='';
        box.disabled=false;
    })
    let txt=document.querySelector("#msg");
    if(txt){
        txt.remove();
    }
    
});
function disableboxes(){
    boxes.forEach((box)=>{
        box.disabled=true;
    })
};