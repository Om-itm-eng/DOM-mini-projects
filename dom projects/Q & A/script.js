const que = document.querySelectorAll(".Q");
que.forEach(function(q){
    let btn = q.querySelector(".btns");
    btn.addEventListener("click" , function(){
        let answer = q.querySelector(".answer");
        answer.classList.toggle("hide");
        //button css update
        let i = btn.querySelector("i");
        i.classList.toggle("fa-plus-square");
        i.classList.toggle("fa-minus-square");
        
    })
});