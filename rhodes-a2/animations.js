// You can change this,
// but will need to change swatch-holder's tile settings in CSS
const SWATCH_SIZE = 300;

// Looping Animation inspirations
// https://www.thisiscolossal.com/2018/11/hand-drawn-gifs-by-benjamin-zimmerman/
// https://www.thisiscolossal.com/2018/04/animation-of-sinusoidal-waves-in-gifs-by-etienne-jacob/
// https://www.thisiscolossal.com/2018/08/gifs-by-marcus-martinez/
//

let animations = [
  //================================================
  // TODO: Copy and paste this example to make your own animations

  

  {
    title: "Looping ",
    description: "",
    isActive: true, // Set this to "true" to show this animation

    setup(p) {
      this.loopTime = 6.28;
    },
    draw(p, t) {
      let pct = (t % this.loopTime) / this.loopTime;

      // Draw something here!
      p.background(2, 8, 8);

      let sunHue = 50;
      // Set the color!
      p.fill(10, 10, 0);
      p.stroke(70, 70, 90);

      // Move to the center
      p.push();
      p.translate(p.width / 2, p.height / 2);



      let count = 100;
      let theta = (Math.PI * 2) / count;
      for (var i = 0; i < count; i++) {
        p.rotate(theta);
        let lineLength = 200 * Math.sin( t );
        p.line(0, 0, lineLength, 0);
      }

      
      function drawFlower(hue, count) {
        let petalLength = 100;
        let petalWidth = 40;
        let dTheta = (2 * Math.PI) / count;

        p.noStroke();

        // Draw a flower by rotating before drawing each petal
        for (let i = 0; i < count; i++) {
          p.push();
          p.rotate(i * dTheta);

          p.fill(hue, 100, 50);
          p.ellipse(petalLength * 0.5, 0, petalLength, petalWidth);

          // Petal highlight
          p.fill(hue, 100, 70);
          p.ellipse(petalLength * 0.4, 0, petalLength * 0.6, petalWidth * 0.6);

          p.pop();
        }
        p.fill(50, 100, 50);
        p.circle(0, 0, 40);

      // Show that rectangles rotate too!
      for (let i = 0; i < count; i++) {
        p.push();
        p.rotate(i * dTheta + t);

        p.fill(40, 100, 90);
        p.rect(0, 20, 5, 20);

        p.pop();
      }

      p.pop();
    }

      function drawClouds(radius, size, cloudCount) {
        let dTheta = (Math.PI * 2) / cloudCount;
        for (var i = 0; i < cloudCount; i++) {
          let theta = dTheta * i;
          // We want this cloud to move..one step over in this time
          theta += pct * dTheta;

          p.push();
          p.rotate(theta);
          p.translate(0, -radius);

          // Make cloud shapes
          p.scale(size);

          for (var j = 0; j < 1; j++) {
            // By the pct=1, get to where the NEXT i starts
            let i2 = i + pct;
            let x = 0;
            let y = Math.sin(Math.PI * 2 * i2);

            p.noStroke();
            p.fill(0, 0, 0, 0);
            p.ellipse(x, y - 0.2, 2, 1);

            p.fill(100);
            p.ellipse(x, y, 2, 1);
          }

          p.pop();
        }
      }

      drawClouds(100, 10, 5);
      drawClouds(120, 10, 8);
      drawClouds(140, 10, 11);
      drawClouds(160, 10, 140);
      drawFlower(20, 3)

      p.pop();
    },
  },

  //================================================
  // An example
 

  //================================================
  // An example

  {
    title: "colors",
    description:
      "moving ball a wind background",
    isActive: true,

    setup(p) {
      // Draw this once at the beginning
      p.background(0, 0, 0);
    },
    
    draw(p, t) {
      
        for (var i = 0; i < 40; i++) {
        // Go from right to left, with a noise move downward
        let x = t * 900 + i * 20;
        let y = t + i * 10
        // * 70 + i * 5 + 100 * p.noise(t + i * 0.1);

        // Loop around!
        x %= p.width;
        y %= p.height;

        let hue = (t * 50 + i) % 360;
        let circleRadius = 10;

        //         Using an exponent (ie, 0.3 ^ 3)
        // pushes values closer to 0, unless they are near 1

        let saturation = 700 * p.noise(t) ** 3;

        // Make a drop shadow
        p.noStroke();
        p.fill(hue, saturation, 0, 0.1);
        p.circle(x, y + 10, circleRadius * 1);

        p.fill(hue, saturation, 100 - 0.5 * saturation);
        p.circle(x, y, circleRadius);
      }
      //let hue = Math.random() * 360;

      // Use this line instead for just blue circles
      // let hue = Math.random()*50 + 150

      // Ternary operator: there's a 30% chance of orange, 70% chance of green
      // let hue = (Math.random()<.3?20:170) + 30*Math.random()

      // Use the time
      let hue = t*100

      let sat = 100;
      let brightness = 50;
      let opacity = Math.random();

      p.noStroke();
      
      p.background(0, 0, 0, 0.1);
      // The center of the swatch is at (p.width/2, p.height/2)
      // let x = p.width * (0.5 + 0.5 * Math.sin(t));
      // // let y = p.height * 0.5;
      // let y = p.height * (.5 + .5 * Math.sin(10*t))
      // let r = 100;

      // Perlin noise
      // A way to get smooth motion, but not predictable
      let x = p.width * p.noise(t+100);
      let y = p.height * p.noise(t + 1000);
      let r = 100;

      p.fill(hue % 360, sat, brightness, opacity);
      p.circle(x, y, r);
    },
  },

  //================================================
  // An example

  {
    title: "Snakes!!",
    description:
      "",
    isActive: true,

    setup(p) {
      p.background(0, 0, 0, 0);

      // You can also store information on the swatch
      this.theta = 0;
    },
    draw(p, t) {
      let hue2 = Math.random() * 360;

      // Use this line instead for just blue circles
      let hue = Math.random()*50 + 150

      // Ternary operator: there's a 30% chance of orange, 70% chance of green
      // let hue = (Math.random()<.3?20:170) + 30*Math.random()

      // Use the time
      let hue3 = t*100

      let sat = 100;
      let brightness = 50;
      let opacity = Math.random();

      p.background(0, 0, 0, 0.02);
      this.theta += 0.04;

      let centerX = p.width / 2;
      let centerY = p.height / 2;

      // let radius = 100
      let radius = 100 * Math.sin(t);
      // let radius = 100*p.noise(t)
      // let radius = 100*p.noise(t*10)

      let x = radius * Math.cos(this.theta) + centerX;
      let y = radius * Math.sin(this.theta) + centerY;
      let r = 30;

      let x2 = radius * Math.cos(2*this.theta) + centerX;
      let y2 = 12 * Math.sin(5*this.theta) + centerY;
      let r2 = 30;
      
      
      let x3 = 12 * Math.cos(7*this.theta) + centerX;
      let y3 = 120 * Math.sin(.5*this.theta) + centerY;
      let r3 = 30;
      
      
      
      p.noStroke();
      p.fill(hue % 360, sat, brightness, opacity);
      p.circle(x, y, r);
      
      p.fill(hue3 % 360, sat, brightness, opacity);
      p.circle(x2, y2, r2);
      
      p.fill(hue % 360, sat, brightness, opacity);
      p.circle(x3, y3, r3);
    },
  },

  //================================================
  // For-Loops example

  
  //================================================
  // For-Loops example

  



  {
    title: "Its a boat sailing!",
    description: "",
    isActive: true,

    setup(p) {
      p.background(240,100,100);
      let emoji =
        "🤲 👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤟 🤘 👌 🤏 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 🤙 💪 🖕 ✍️ 🙏 💅 🤝 🤗 🙋‍♀️ 🙆‍♂️ 🤦‍♂️".split(
          " "
        );
      // How many tiles and how big are they?
      let count = 20;
      let tileSize = p.width / count;
      let noiseScale = 0.01;

      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          let x = tileSize * i;
          let y = tileSize * j;

          // let randomEmoji = p.random(emoji);
          // p.text(randomEmoji, x, y);
        }
      }
    },
    draw(p, t) {
      
      for (var i = 0; i < 40; i++) {
        // Go from right to left, with a noise move downward
        let x = t * 120 + i * 20;
        let y = t * 70 + i * 5 + 90 * p.noise(t + i * 0.1);

        // Loop around!
        x %= p.width;
        y %= p.height;

        let hue1 = (t * 50 + i) % 360;
        let hue = Math.random()*50 + 150

      // Ternary operator: there's a 30% chance of orange, 70% chance of green
      // let hue = (Math.random()<.3?20:170) + 30*Math.random()

      // Use the time
      let hue3 = t*100

      let sat = 100;
      let brightness = 50;
      let opacity = Math.random();
        let circleRadius = 10;

        //         Using an exponent (ie, 0.3 ^ 3)
        // pushes values closer to 0, unless they are near 1

        let saturation = 700 * p.noise(t) ** 3;

        // Make a drop shadow
        p.noStroke();
        p.fill(hue, saturation, 0, 0.1);
        p.circle(x, y + 10, circleRadius * 1);

        p.fill(hue, 50, 70);
        p.circle(x, y, circleRadius);
      }
      // Perlin noise
      // A way to get smooth motion, but not predictable
      let x = p.width * p.noise(t * 0.2);
      let y = p.height * p.noise(t * 0.3 + 100);
      let theta = 30 * p.noise(t * 0.1);

      // Big centered text
      p.textSize(90);
      p.textAlign(p.CENTER);

      // White text with a black outline
      p.fill(100);
      p.stroke(0);

      p.push();
      p.translate(x, y);

      // p.rotate(theta);
      p.text("⛵️", 0, 0);
      p.pop();
    },
  },


];
