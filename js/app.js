document.addEventListener("DOMContentLoaded", function(event){
    
    console.log("Działam");
    function Character () {
        this.x = 0;
        this.y = 0;
        this.direction = 'right';
    }
    
    function Apple () {
        this.x = Math.floor(Math.random()*10);
        this.y = Math.floor(Math.random()*10);
    }
    
    function Game () {
        var section = document.getElementById('board');
        this.board = section.querySelectorAll('div');
        
        this.character = new Character();
        this.apple = new Apple();
        this.score = 0;
        
        this.position = function (x, y) {
            var index = x + y * 10;
            return index;
        }
        
        this.show = function () {
            this.board[this.position(this.character.x, this.character.y)].classList.add('character');
            
            this.board[this.position(this.apple.x, this.apple.y)].classList.add('apple');
        }
    }
     var me = new Game();
    
    //console.log(me.board);
    console.log(me.character.x);
    console.log(me.apple);
    console.log(me.score);
    
    me.show();
    //me.board[0].classList.add('character');
   // me.board[56].classList.add('apple');
});