class string{
    constructor(bodyA, pointB){
        
        var options = {
            
            bodyA: bodyA,
            pointB: pointB,
            stiffness=0.3
          
        }
        this.Sling = Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.Sling);
    }

    display(){
        if (this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }}}
  