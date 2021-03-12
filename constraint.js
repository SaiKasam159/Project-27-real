class String{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyB = bodyB
        this.SlingShot= Constraint.create(options);
        World.add(world, this.SlingShot);
    }

      display(){
            var pointA = this.SlingShot.bodyA.position;
            var bodyB = this.bodyB;
            strokeWeight(4);
            line(pointA.x, pointA.y, bodyB.x, bodyB.y);
        
    }
    
}

