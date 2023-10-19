function setup() {
    createCanvas(600, 600);
    background("pink");
   }
    
   function draw() {
    stroke("blue");
    fill("red");
   
    //console.log(mouseIpressed)
     
      if(mouseIsPressed)      {
    rect (mouseX, mouseY, 20,35);
    }
   }