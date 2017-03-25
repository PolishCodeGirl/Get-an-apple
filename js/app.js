document.addEventListener("DOMContentLoaded", function(event){
    
    //object constructor 
    function Character () {
        this.x = 0,
        this.y = 0,
        this.direction = 'right'
    }
    
    //object constructor
    function Apple () {
        // random position 
        this.x = Math.floor(Math.random()*10),
        this.y = Math.floor(Math.random()*10)
    }
    
    //object constructor
    function Game () {
        this.board = document.querySelectorAll('#board div'),
        this.character = new Character,
        this.apple = new Apple,
        this.score = 0,
        this.show(),
        document.addEventListener('keydown', this.keyboard)
        
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
    
    var self = this;
    
    // Object prototype for calculation of position by finding index of div 
    Game.prototype.position = function (a, b) {
        var index = a + b * 10;
        return index;
    };
    
    Game.prototype.show = function() {
        for (var i = 0; i<this.board.length; i++) {
            this.board[i].classList.remove('character');
        }
        
        var characterPosition = this.position(this.character.x, this.character.y);
        this.board[characterPosition].classList.add('character');
        
        var applePosition = this.position(this.apple.x, this.apple.y);
        this.board[applePosition].classList.add('apple');
    };
    
    Game.prototype.keyboard = function(event){
        var keyCode = event.which;
        console.log(keyCode);
        
        switch (keyCode) {
            case 37:
                self.direction = 'left';
                break;
            case 38: 
                self.direction = 'up';
                break;
            case 39: 
                self.direction = 'right';
                break;
            case 40: 
                self.direction = 'down';
                break;
        }
    };
    
    Game.prototype.move = function() {
        switch(self.character.direction) {
            case 'up':
                self.character.y--;
                break;
            case 'down': 
                self.character.y++;
                break;
            case 'left':
                self.character.x--;
                break;
            case 'right':
                self.character.x++;
                break;
        } self.show()
    };
    
    new Game();
//     var me = new Game();
//    
//    //console.log(me.board);
//    console.log(me.character.x);
//    console.log(me.apple);
//    console.log(me.score);
//    
//    me.show();
//    //me.show();
//    //me.board[0].classList.add('character');
//   // me.board[56].classList.add('apple');
});