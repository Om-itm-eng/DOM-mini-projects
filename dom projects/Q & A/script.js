const que = document.querySelectorAll(".Q");
que.forEach(function(q){
    let btn = q.querySelector(".btns");
    btn.addEventListener("click" , function(){
        que.forEach(function(item){
            if(q === item){
                item.querySelector(".answer").classList.toggle("hide");
                btn.classList.toggle("fa-plus-square");
                btn.classList.toggle("fa-minus-square");
            }
            else{
                item.querySelector(".answer").classList.add("hide");  
                item.querySelector(".btns").classList.remove("fa-minus-square");
                item.querySelector(".btns").classList.add("fa-plus-square");
            }
           
        });
        
        
    })
});