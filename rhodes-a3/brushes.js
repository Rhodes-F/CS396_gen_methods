const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;

// Current tool settings
let p; // Processing object, accessible from anywhere
let color0 = [160, 100, 50];
let color1 = [320, 100, 50];
let brushSize = 1;

function startDrawing(p) {
  // Change if you want to start with a different background,
  // or even *no background!*
  p.background(0, 0, 50);
}

let brushes = [
  // Your brushes here!
  //======================================================
  {
    label: "🕳",
    isActive: true,
    description: "Eraser",

    setup() {
      //       When the user clicks erase, what happens?
      console.log("eraser-click")
      let x = p.mouseX;
      let y = p.mouseY;
      let r = brushSize * 50 + 1;

      // Remove the stroke and set the color to the current color
      p.noStroke();
      p.fill(0, 0, 50);

      p.circle(x, y, r);
    },
    
    mouseDragged() {
      //       When the user drags erase, what happens?
      console.log("eraser-drag")
      let x = p.mouseX;
      let y = p.mouseY;
      let r = brushSize * 25 + 1;

      // Remove the stroke and set the color to the current color
      p.noStroke();
      p.fill(0, 0, 50.2);

      p.circle(x, y, r);
    },
  },

  //======================================================
  //======================================================
  // Example brushes


  //======================================================
  {
    label: "〰",
    isActive: true,
    description:
      "this makes rainbow muliti lines depending on color0 and color1 and position",

    // Using "draw" because pmouseX only remembers the mouse pos
    // each "frame" which is slightly different than
    // each time we drag the mouse
    draw() {
      console.log("draw")
      let x = p.mouseX;
      let y = p.mouseY;
      let x1 = p.pmouseX;
      let y1 = p.pmouseY;

      if (p.mouseIsPressed) {
        // Another way to say p.stroke(color0[0], color0[1], color0[2]);
        p.stroke(...color0);

        p.strokeWeight(brushSize * 10 + 2);
        p.line(x, y, x1, y1);
        p.stroke(...color1);

        p.strokeWeight(brushSize * 10 + 2);
        p.line(x +5, y+5, x1+5, y1+5);
        
        p.stroke(color0[0]+x*.37 %360, color0[1]+x-50 %360 , color0[2]);

        p.strokeWeight(brushSize * 10 + 2);
        p.line(x+10, y+10, x1+10, y1+10);
        
        
        p.stroke(color1[0]+x*.37 % 360, color1[1]+x-50 %360, color1[2]);

        p.strokeWeight(brushSize * 10 + 2);
        p.line(x+15, y+15, x1+15, y1+15);
      }
    },
  },

  //======================================================

  {
    label: "🖌",
    isActive: true,
    description:
      "Complicated discrete brush. It uses the color0, color1, and size properties set by the sliders to make cute(?) faces",

    setup() {
      //       Count how many times we've drawn
      this.drawCount = 0;
    },

    // Options: setup (when tool is selected), draw (every frame),
    mouseDragged() {
      //       Here I am keeping track of both the current time, and how many times this brush has drawn

      let t = p.millis() * 0.001; // Get the number of seconds
      this.drawCount += 1;
      let x = p.mouseX;
      let y = p.mouseY;

      //       Controllable brush size
      let r = brushSize * 10 + 10;

      //       Change the brush by how many we have drawn
      // r *= 0.5 + p.noise(this.drawCount * 0.1);
      //       Change the brush by the current time
      // r *= 0.5 + p.noise(t * 10);

      //       Shadow
      p.noStroke();
      p.fill(color0[0], color0[1], color0[2] * 0.2, 0.1);
      p.circle(x, y + r * 0.15, r * 1.1);

      // Big circle
      p.noStroke();
      p.fill(color0[0], color0[1], color0[2]);
      p.circle(x, y, r);

      p.noStroke();
      p.fill(255,255,255);
      p.circle(x - r * 0.3, y - r * 0.1, r * 0.25);
      
      
      p.noStroke();
      p.fill(color1[0], color1[1], color1[2]);
      p.circle(x - r * 0.3, y - r * 0.1, r * 0.15);

      p.noStroke();
      p.fill(0,0,0);
      p.circle(x - r * 0.3, y - r * 0.1, r * 0.07);
      
      p.noStroke();
      p.fill(255,255,255);
      p.circle(x + r * 0.3, y - r * 0.1, r * 0.25);
      
      
      p.noStroke();
      p.fill(color1[0], color1[1], color1[2]);
      p.circle(x + r * 0.3, y - r * 0.1, r * 0.15);
      
      p.noStroke();
      p.fill(0,0,0);
      p.circle(x + r * 0.3, y - r * 0.1, r * 0.07);
      
      let count = r
      for (var i = 0; i < count; i++) {
        // Offset a polar
        p.noStroke();
      p.fill(...color1);
      p.circle(x - r * 0.5 +i, y + r * 0.4, r * 0.1);
        
      //   p.noStroke();
      // p.fill(255,255,255);
      // p.circle(x - r * 0.5 +i, y + r * 0.4, r * 0.05);
      }
      for (var i = 0; i < count; i++) {
        // Offset a polar

        p.noStroke();
      p.fill(255,255,255);
      p.circle(x - r * 0.5 +i, y + r * 0.4, r * 0.05);
      }
      
      //       Highlight
      // p.noStroke();
      // p.fill(color1[0], color1[1], color1[2] * 1.4);
      // p.circle(x - r * 0.15, y - r * 0.15, r * 0.5);
    },
  },

  //======================================================



  //======================================================

  {
    label: "⛵️",
    description: "makes boats on water",
    isActive: true,

    mouseDragged() {
      let hearts = ["⛵️"];
      console.log("Drag...");
      let x = p.mouseX;
      let y = p.mouseY;

      
      let size = 10;
      let count = 1;

      // Scale the cluster by how far we have moved since last frame
      // the "magnitude" of the (movedX, movedY) vector
      let distanceTravelled = p.mag(p.movedX, p.movedY);
      size = distanceTravelled * 2 + 10;

      // I often draw a shadow behind my brush,
      // it helps it stand out from the background
      //blue is from 170-250
      
      p.fill(1);

      for (var i = 0; i < count; i++) {
        // Offset a polar
        let r = size * Math.random();
        let theta = Math.random() * Math.PI * 2;
        p.textSize(size*5);
        let emoji = p.random(hearts);

        let x2 = x ;
        let y2 = y ;
        p.text(emoji, x2, y2);
      }
      
      let hue = Math.random()*50 + 150
      p.noStroke();
      p.fill(hue, 100, 50,.01);
      
      p.fill(Math.random()*50 + 150, 100, 50,1);
      p.circle(x+10, y+10, size*.5 );
      
      p.fill(Math.random()*50 + 150, 100, 50,1);
      p.circle(x+15, y+8, size*.5 );
      
      p.fill(Math.random()*50 + 150, 100, 50,1);
      p.circle(x+20, y+10, size*.5 );
      
      p.fill(Math.random()*50 + 150, 100, 50,1);
      p.circle(x+25, y+10, size*.5 );
      
      p.fill(Math.random()*50 + 150, 100, 50,1);
      p.circle(x+30, y+10, size*.5 );
      
      p.fill(Math.random()*50 + 150, 100, 50,1);
      p.circle(x+35, y+10, size*.5 );
      
      p.fill(Math.random()*50 + 150, 100, 50,1);
      p.circle(x+40, y+10, size*.5 );
      
      p.fill(Math.random()*50 + 150, 100, 50,1);
      p.circle(x+45, y+10, size*.5 );
      
      p.fill(Math.random()*50 + 150, 100, 50,1);
      p.circle(x+50, y+10, size*.5 );
      
      p.fill(Math.random()*50 + 150, 100, 50,1);
      p.circle(x+55, y+10, size*.5 );
      
      p.fill(Math.random()*50 + 150, 100, 50,1);
      p.circle(x+60, y+10, size*.5 );
      
      p.fill(Math.random()*50 + 150, 100, 50,1);
      p.circle(x+65, y+10, size*.5 );
      
      p.fill(Math.random()*50 + 150, 100, 50,1);
      p.circle(x+70, y+10, size*.5 );
      
      

      // Draw some emoji
      
      
    },
  },

  //======================================================
  {
    label: "⚡️",
    isActive: true,
    description: "A continuous brush with circles and a secondary fill of color 2",

    mousePressed() {
      //       We need to store the points
      this.points = [];
      // We can start storing a new set of points when the mouse is pressed
    },

    mouseDragged() {
      let x = p.mouseX;
      let y = p.mouseY;
      // Add a new point to the beginning of this list
      this.points.unshift([x, y]);

      p.noFill();
      p.stroke(color0[0], color0[1], color0[2] + 50 * Math.random(), 0.8);
      p.beginShape();

      // Take every...10th? point
      // What happens if you change this
      this.points
        .filter((pt, index) => index % 5 == 0)
        .forEach(([x, y]) => {
          let dx = 0;
          let dy = 0;

          //         What happens if we offset the x and y we are drawing?
            dx = Math.random()*100
            dy = Math.random()*10
        p.fill(color1[0], color1[1], color1[2] + 50 * Math.random(), .5)
        p.circle(x,y,10)
           p.stroke(color0[0], color0[1], color0[2] + 50 * Math.random(), 0.8);
          p.curveVertex(x + dx, y + dy);
        
        
 
        
        
        });

      p.endShape();
    },
  }, //======================================================
  {
    label: "🦔",
    isActive: true,
    description: "Make mirrored color changing spikes",

    setup() {
      // Store all the poitns this brush has made
      this.points = [];
    },

    mouseDragged() {
      // Every time we move
      // Add a new point to the beginning of this list
      let x = p.mouseX;
      let y = p.mouseY;
      let pt = [x, y];
      let pt2= [600-x,400-y]
      // How long does this dot live?
      pt.totalLifespan = 10 + Math.random()*10;
      pt2.totalLifespan = 10 + Math.random()*10;
      // Try a longer lifespan 😉
      // pt.totalLifespan = 10 + Math.random()*100;
      
      pt.lifespan = pt.totalLifespan
      this.points.push(pt);

      
      pt2.lifespan = pt2.totalLifespan
      this.points.push(pt2);
      
      p.circle(x, y, 4);
    },

    draw() {
      
      let radius = 5
      let t = p.millis() * .001;
      
    
      
      // Each point keeps drawing itself, as long as it has a lifespan
      this.points.forEach((pt, index) => {
        //
        pt.lifespan--;

        if (pt.lifespan > 0) {
        
          let pctLife = pt.lifespan/pt.totalLifespan
          let r = radius*.5
          let theta = p.noise(index, t*.1)*100;
          
          // Grow in some direction
          pt[0] += r * Math.cos(theta);
          pt[1] += r * Math.sin(theta);
          
            
          p.noStroke()
           p.fill(color0[0], color0[1], color0[2]*.1, .1)
          p.circle(...pt, (pctLife)*radius*2);
         
          // p.fill(color0[0] + p.noise(index)*40, color0[1], color0[2]*(1 - pctLife))
          p.fill(color0[0] + p.mouseX, color0[1], color0[2]*(1 - pctLife))
//           Get smaller at the end of your life
          p.circle(...pt, (pctLife**1.5)*radius);
        }
      });
    },
  },
];
