//蛇

(function(window){
    function Snake(width,height,bgColor,direction){
        this.width = width ||20;
        this.height = height ||20;
        this.direction = direction || "right";
        this.body = [
            {x:3,y:1,bgColor:"red"},
            {x:2,y:1,bgColor:"pink"},
            {x:1,y:1,bgColor:"skyblue"}
        ];   
    }
    var arr = [];
    Snake.prototype.render = function(){
        remove();
        for(var i = 0;i<this.body.length;i++){
            let div = document.createElement("div");
            div.style.width = this.width +"px";
            div.style.height = this.height +"px";
            div.style.position = "absolute";
            div.style.left = this.body[i].x *this.width +"px";
            div.style.top = this.body[i].y*this.height +"px";
            div.style.backgroundColor = this.body[i].bgColor;
            let list = [0,1,2,3,4,5,6,7,8]
            if(i==list[i]){
                let img = document.createElement("img");
                img.src= i+".jpg";
                img.style.width = this.width +"px";
                img.style.height = this.height +"px";
                div.appendChild(img);
            }else{
                let img = document.createElement("img");
                img.src= "./alian.jpg";
                img.style.width = this.width +"px";
                img.style.height = this.height +"px";
                div.appendChild(img);
            }
            map.appendChild(div);
            arr.push(div);
            //console.log(arr);
            
         } 
    }
    Snake.prototype.move = function(map,food){
        for(var i = this.body.length-1;i>0;i--){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        switch (this.direction){
            case ("right"):
                this.body[0].x++;
                break;
            case ("left"):
                this.body[0].x--;
                break;
            case ("top"):
                this.body[0].y--;
                break;
            case ("bottom"):
                this.body[0].y++;
                break;
        }

        //食物的位置
        let foodX = food.foodLeft;
        let foodY = food.foodTop;       
        //蛇头位置
        let headX = this.body[0].x * this.width;
        let headY = this.body[0].y * this.height;
        //console.log(headX,headY,foodX,foodY);
        if(foodX==headX&&foodY==headY){
            var obj = {};
            obj.x = this.body[this.body.length-1].x;
            obj.y = this.body[this.body.length-1].y;
            obj.bgColor = "blue";
            this.body.push(obj);
            food.render(map);
        }


    }       
     function remove(){
            for(var i = 0;i<arr.length;i++){
                map.removeChild(arr[i]);
            }
            arr.length = 0;
        }

    window.Snake = Snake;
})(window)
