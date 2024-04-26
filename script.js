const main = document.getElementById("main");
const span = main.getElementsByTagName("span");

function new_game(){
    for(let i=0; i<span.length; i++){
        span[i].textContent = parseInt(Math.random()*2);
        span[i].style.backgroundColor = "white";
        span[i].style.transform = "scale(0) rotateZ(360deg)";
        span[i].style.color = "transparent"
        setTimeout(()=>{
            span[i].style.transform = "scale(1) rotateZ(0deg)";
        },800);
    }

    for(let i=1; i<5; i++){
        let ans=0;
        for(let j=5+i; j<26; j+=5){
            ans+=parseInt(main.children[j].textContent)
        }
        main.children[i].textContent = ans;
        main.children[i].style.transform = "scale(0) rotateZ(360deg)";
        setTimeout(()=>{
            main.children[i].style.transform = "scale(1) rotateZ(0deg)";
        },800)
    }

    for(let i=5; i<21; i+=5){
        let ans=0;
        for(let j=i+1; j<5+i; j++){
            ans+=parseInt(main.children[j].textContent)
        }
        main.children[i].textContent = ans;
        main.children[i].style.transform = "scale(0) rotateZ(360deg)";
        setTimeout(()=>{
            main.children[i].style.transform = "scale(1) rotateZ(0deg)";
        },800)
    }
}


addEventListener("click",(e)=>{
    var row=[],column=[];
    for(let i=1; i<5; i++) column.push(main.getElementsByTagName("div")[i].textContent)
    for(let i=5; i<9; i++) row.push(main.getElementsByTagName("div")[i].textContent )

    if(e.target.localName == "span")
        if(e.target.style.backgroundColor != "red")
        e.target.style.backgroundColor = "red";
    else e.target.style.backgroundColor = "white";

    var win=0;
    for(let i=0; i<4; i++){
        let red_row=0;
        let red_column=0;
        for(j=0; j<4; j++){
            if(span[4*i+j].style.backgroundColor == "red") red_row++;
            if(span[4*j+i].style.backgroundColor == "red") red_column++;
        }
        if(red_row==row[i]) win++;
        if(red_column==column[i]) win++;
        if(win==8){
            for(let i=0; i<span.length; i++){
                span[i].style.transform = "scale(0) rotateZ(360deg)";
                span[i].innerHTML = "Win";
                span[i].style.color = "white"
                setTimeout(()=>{
                    span[i].style.transform = "scale(1) rotateZ(0deg)";
                },800);
            }
        }
    }
});
