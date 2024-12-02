const dls = document.getElementsByTagName("dl");

for(i=0;i<dls.length;i++){
    dls[i].addEventListener("click", function (){
        const dds = this.nextElementSibling;
    if(dds.style.display === "block"){
        dds.style.display = "none";
        
    }else{
        dds.style.display = "block"
        dds.style.maxHeight = dds.scrollHeight + "px";
    }
    });
    

}

window.addEventListener('scroll', () => {
    let flipCard = document.getElementsByClassName('flip-card');
    let scrollFlip = [500,1400,2000,3000,3800,4500,5400];
    let i;
    for(i=0;i<flipCard.length;i++){
        if(window.scrollY >= scrollFlip[i]){
            
            flipCard[i].style.left = "65%";
            
        }else{
             
            flipCard[i].style.left = "110%";
            
           
            
        }
    }
})





