const GENERATORS = {
  
   lorax_tree: {
    description: "this is my working tree/forset generator",
    sliders: [
      "size",
      "complexity",
      "offset",
      "hue",
      "hueOffset",
      "lumps",
      "wind",
      "height", 
      "trunk thickness", 
      "bend",
    ],
    landmarks: {
      "tall yellow tree(lemon drop)": [0.65,0.34,0.56,0.19,0.45,0.08,0.08,0.47,0.08,0.15],
      "offset rock and roll tree": [0.69,0.90,0.09,0.76,0.92,0.75,0.05,0.82,0.14,0.91],
      "tiny blue tree": [0.10,0.93,0.76,0.71,0.22,0.28,0.02,0.09,0.30,0.13],
      "comment tree": [0.54,0.45,0.62,0.14,0.18,0.97,0.98,0.52,0.50,0.91],
      "leaning heart tree": [0.18,0.77,0.08,0.90,0.60,0.02,0.78,0.44,0.82,0.93],
    },
    setup(p) {},

    drawBackground(p, t) {
      p.background(240, 30, 60);

      p.noStroke();

      for (var j = 0; j < 5; j++) {
        p.fill(170 + j * 10, 70, 40, 0.3);
        p.beginShape();
        let y = 100;
        p.vertex(0, 0);
        p.vertex(0, 0);
        p.vertex(0, y);
        // Ripply vertices
        let waveCount = 10;
        for (var i = 0; i < waveCount; i++) {
          let x = (i + 0.5) * (p.width / waveCount);
          let y2 = y + 100 * p.noise(i, t + j * 10);
          p.curveVertex(x, y2);
        }
        p.vertex(p.width, y);
        p.vertex(p.width, 0);
        p.vertex(p.width, 0);
        p.endShape();
      }
    },



    
    draw(p, t, dna, index) {
      p.push();
      
      let scale = dna[0]*2;
      let x = 0;
      let y = 0; 
      let height = dna[7]*170+20
      let thick = dna[8]*15+4
      let bend= dna[9]*12
      p.beginShape();
      p.fill(36, 100, 20);
      p.vertex(thick/2-(3*bend), -height);
      p.vertex(-thick/2-(3*bend), -height);
      
      p.curveVertex(-bend, -height/4)
      p.vertex(-thick, 0);
      p.vertex(thick, 0);
      p.vertex(bend, -height/2);
      p.endShape();
      
      let leaves = Math.round(dna[10]*4)
      p.fill(dna[3]*360,50,50)
      p.ellipse(thick/3, -height/5, 6*scale,3*scale)
      p.ellipse(-thick/3, -height/2, 4*scale,2*scale)
      
    
      
      // Move the fish around a bit

      p.translate(-3*bend, -height);
      p.rotate(1 * p.noise(0.3 * t + index) - 0.5);
      
      
      
      
      
      

      let fishSize = dna[0] * 30 + 10;

      let pointCount = dna[1] * 20 + 3;

      let deformation = dna[2];

      let hue = dna[3];
      let hueOffset = dna[4] - 0.5;
      let lumps = dna[5];
      let streamline = dna[6];

      // Make the point on the body
      let bodyPoint = (r, theta, index) => {
        // Make every other point lumpy

        r *= 1 + lumps * (index % 2);
        let bp = Vector2D.polar(r, theta);

        // Use noise to offset each point
        let defR = 0.2 * r * deformation;
        let scale = 0.1;
        let defTheta = 20 * p.noise((bp[0] * scale, bp[1] * scale + t * 0.3));

        // Sweep the body back
        bp[0] += 1.5 * streamline * Math.abs(bp[1]);
        bp.addPolar(defR, defTheta);
        return bp;
      };

      // Draw a blobby shape, actually draw 3 shapes on top of each other
      for (var i = 0; i < 3; i++) {
        let size = fishSize * (1 - i * 0.2);
        p.fill(((hue + 0.2 * i * hueOffset) % 1) * 360, 100, 50 - i * 10, 1);
        p.beginShape();
        for (var j = 0; j < pointCount + 2; j++) {
          // get the point on this body
          let theta = (j * Math.PI * 2) / pointCount;
          let bp = bodyPoint(size, theta, j);
          p.curveVertex(...bp);
        }

        p.endShape();
      }
      p.pop();
    },
  },
  
  
  circle: {
    description: "this is for practice",
    sliders: ["size", "aspectRatio", "hue", "brightness", "bounce"],
    landmarks: {
      tennisball: [0.00,0.36,0.32,0.86,1.00],
      basketball: [1.00,0.60,0.04,0.48,1.00],
      "it dissapeared":[0.00,0.00,0.32,0.86,1.00],
      football:[0.84,0.72,0.10,0.00,0.50],
      "tall bule circle that doesn't move":[0.33,0.27,0.53,0.81,0.04],
      
      
    },
    setup(p) {},

    drawBackground(p) {
      p.background(0, 50, 50);
    },

    draw(p, t, dna) {
      let x = 0;
      let y = 0;

      // How to access DNA
      let size = dna[0]; // 0-1
      size = size * 30 + 10;
      let hue = dna[2] * 360;
      let brightness = dna[3] * 40 + 40;  
      let bounce = Math.abs(Math.sin(t * 3));
      let aspectRatio = dna[1] +.2;
      let angle = 1;
      aspectRatio += 0.2 + -0.5 * bounce;
      let stickiness = 0.2;
      let jumpHeight = 40*dna[4];
      y -= Math.max(
        0,
        jumpHeight * (Math.abs(Math.sin(t * 3 + 0.2)) - stickiness)
      );
      angle = p.lerp(0, angle, bounce);

      let w = size * aspectRatio;
      let h = size * (1 / aspectRatio);
      
      p.fill(hue, 100, brightness);
      p.ellipse(x+dna[4], y, size*dna[1]+10, .5/dna[1]*size);
      for (var i = 0; i < dna[2]; i++) {
        let xpos = i/dna[2] * 2 * size
        xpos -= size
        let ypos = -size + y + dna[4] 
        ypos += (Math.random() * dna[2]/2)
        p.vertex(xpos, ypos)
      }
    
    }
    
  },
  
  
};
