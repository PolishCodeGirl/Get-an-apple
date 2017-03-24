document.addEventListener("DOMContentLoaded", function(event){
    
    function Character () {
        this.x = 0,
        this.y = 0,
        this.direction = 'right'
    }
    
    function Apple () {
        this.x = Math.floor(Math.random()*10),
        this.y = Math.floor(Math.random()*10)
    }
    
    function Game () {
        this.board = document.querySelectorAll('#board div'),
        this.character = new Character,
        this.apple = new Apple,
        this.score = 0 
        
//        this.position = function (x, y) {
//            var index = x + y * 10;
//            return index;
//        }
//        
//        this.show = function () {
//            this.board[this.position(this.character.x, this.character.y)].classList.add('character');
//            
//            this.board[this.position(this.apple.x, this.apple.y)].classList.add('apple');
//        }
    }
    
    Game.prototype.position = function (a, b) {
        var index = a + b * 10;
        return index;
    };
    
    Game.prototype.show = function() {
        var characterPosition = this.position(this.character.x, this.character.y);
        this.board[characterPosition].classList.add('character');
        
        var applePosition = this.position(this.apple.x, this.apple.y);
        this.board[applePosition].classList.add('apple');
    };
    
    
     var me = new Game();
    
    //console.log(me.board);
    console.log(me.character.x);
    console.log(me.apple);
    console.log(me.score);
    
    me.show();
    //me.show();
    //me.board[0].classList.add('character');
   // me.board[56].classList.add('apple');
});