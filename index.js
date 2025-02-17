const headerEl = document.getElementById("header-el");
let mouseInitPos = 0;
const rectangleEl = document.getElementById("rectangles")
const root = document.getElementById("root");
const subHeaderEl = document.getElementById("sub-header");
const logoEl = document.getElementById("logo-el");
const mainHeaderEl = document.getElementById("main-header");
let isHeader;
const tweetEl = document.getElementById("tweet")
const currentTweetEl = document.getElementById("page1")
const nextTweetEl = document.getElementById("page2")

root.onmousedown=(e)=>{
    e.clientY;
    mouseInitPos = e.clientY;
    isHeader = headerEl.dataset.isHeader
    if(isHeader==="false"){
        subHeaderEl.animate({
        opacity:"0"
        },{
        duration:300,
        fill:"forwards"
        })
        
    mainHeaderEl.style.animation = "slide-main-header-down 0.3s"
    setTimeout(()=>{
        mainHeaderEl.style.transform = "translateY(20px)"
    })
    root.style.backgroundColor = "#3f3f3f";}
    
}

root.onmouseup = (e)=>{
    e.clientY
    if(isHeader==="false"){
        if(mouseInitPos>e.clientY){
            rectangleEl.animate({
                opacity:"0"
            },{
                duration:300,
                fill:"forwards"
            })

            headerEl.style.animation = "reduce-height-of-header 1s"
            setTimeout(()=>{
                headerEl.style.height = "110px"
            },1000)
            
            headerEl.dataset.isHeader = "true"
            
        }
        
    }
    else{
        console.log("hello world")
        currentTweetEl.style.animation = "page-scroll-up 1s"
        nextTweetEl.style.animation = "page-scroll-up 1s"

    }
}