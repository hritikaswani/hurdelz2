class Hurdle{
    constructor(){}     


    spawnHurdle(x, y){
    hurdle = createSprite(x, y, 20, 50);
    }

    checkCollision(){
        if(p1.isTouching(hurdle)){
            players.pop[0];
        }
        if(p2.isTouching(hurdle)){
            players.pop[1];
        }
        if(p3.isTouching(hurdle)){
            players.pop[2];
        }
        if(p4.isTouching(hurdle)){
            players.pop[3];
        }
    }

}