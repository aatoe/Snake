//食物贪吃蛇

(function(window){
    function Food(width,height,bgColor){
        this.width = width ||20;
        this.height = height ||20;
        this.bgColor = bgColor||"green";
    
    }
    let arr = [];
    Food.prototype.render = function(map){
        remove();
        this.foodLeft = Math.floor(Math.random()*map.offsetWidth /this.width)*this.width;
        this.foodTop = Math.floor(Math.random()*map.offsetHeight/this.height)*this.height;
        let div = document.createElement("div");
        div.style.width = this.width +"px";
        div.style.height = this.height +"px";
        div.style.position = "absolute";
        div.style.left = this.foodLeft +"px";
        div.style.top = this.foodTop +"px";
        //div.style.backgroundColor = this.bgColor;
        let img = document.createElement("img");
        img.src="./alian.jpg";
        img.style.width = this.width +"px";
        img.style.height = this.height +"px";
        div.appendChild(img);
        map.appendChild(div);
        arr.push(div);
        
    }

    function remove(){
        for(var i = 0;i<arr.length;i++){
            map.removeChild(arr[i]);
        }
        arr.length = 0;
    }
    window.Food = Food;
})(window)