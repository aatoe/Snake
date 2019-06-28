//游戏控制开关
(function(window){
    function Game(map){
       this.food = new Food;
       this.snake = new Snake;
       this.map = map;
       this.that = this; 
    }
    Game.prototype.start = function(map){
        this.food.render(map);
        this.snake.render(map);
        let timeID = setInterval(function(){
            this.snake.move(this.map,this.food);          
            //边界判断
            //蛇头
            let headX = this.snake.body[0].x *this.snake.width;
            let headY = this.snake.body[0].y *this.snake.height;
            //地图宽度
            let mapWidth = map.offsetWidth;
            let mapHeight = map.offsetHeight;
            //console.log(headX,headY,mapWidth,mapHeight);
            if(headX==mapWidth||headX<0||headY==mapHeight||headY<0){
                clearInterval(timeID);
                alert("game over"); 
                return;
                
            }
            this.snake.render(map);
        }.bind(this),200)
    

    document.onkeydown = function(e){
        let key = e.keyCode;
        switch(key){
            case (37):
                if(this.snake.direction !="right"){
                     this.snake.direction = "left";
                }
                break; 
            case (38):
                if( this.snake.direction != "bottom"){
                    this.snake.direction = "top";
                }
                break; 
            case (39):
                if(this.snake.direction !="left"){
                    this.snake.direction = "right";
                }
                break; 
            case (40):
                if(this.snake.direction !="top"){
                    this.snake.direction = "bottom";
                }
                break; 
        }
    }.bind(this)
}
    window.Game = Game;
})(window)