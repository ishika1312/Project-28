class Mango{
    constructor(x, y, r){
        var options ={
            isStatic: true,
            restitution:0,
            friction:1
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("Images/mango.png");

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        //ellipsMode(CENTER);
        //ellipse()
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);

    }
}