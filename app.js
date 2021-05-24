
              //Movemet animation to happen
   const card = document.querySelector (".card");
   const container = document.querySelector (".container");

              //items
   const title = document.querySelector('.title');
   const sneakers = document.querySelector('.sneakers img');
   const purchase = document.querySelector('.purchase button');
   const description = document.querySelector('.info h3');
   const SIZES = document.querySelector('.SIZES');

          //moving animation event
 container.addEventListener("mousemove", (e) => {
     let xAxis = (window.innerWidth / 2 - e.pageX) /15;
     let yAxis = (window.innerHeight / 2 - e.pageY) /13;

     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

 });
 

          //Animate in
container.addEventListener("mouseenter", (e) => {
   card.style.transition = "none";
   
             //popout
title.style.transform = "translateZ(120px)";
sneakers.style.transform = "translateZ(170px) rotateZ(-45deg)";
description.style.transform = "translateZ(110px)";
SIZES.style.transform = "translateZ(100px)";
purchase.style.transform = "translateZ(75px)";

});


           //Animate out 
container.addEventListener('mouseleave', e => {
   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
   card.style.transition = "all 0.5 ease";

             //popback
   title.style.transform = "translateZ(0px)";
sneakers.style.transform = "translateZ(0px) rotateZ(0deg)";
description.style.transform = "translateZ(0px)";
SIZES.style.transform = "translateZ(0px)";
purchase.style.transform = "translateZ(0px)";

});







