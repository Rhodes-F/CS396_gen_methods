import { hexToHSL } from "./utilities.js";
import { data } from "./data.js";

console.log("Loaded data", data);

/**

 * Starter code
 * Data visualization
 */

/* globals Vue, p5*/

window.addEventListener("load", function () {
  //------------------------------------------------------
  //------------------------------------------------------
  //------------------------------------------------------
  //------------------------------------------------------
  // VUE!!!
  // Create a new vue interface

  new Vue({
    template: `<div id="app">
	    <div ref="canvasHolder"></div>		
		  
  </div>`,
    mounted() {
      // Create P5 when we mount this element
      const s = (p0) => {
        p = p0;

        (p.preload = () => {
          // Any preloading
        }),
          (p.setup = () => {
            p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
            p.colorMode(p.HSL, 360, 100, 100);
            p.ellipseMode(p.RADIUS);
          });

        p.draw = () => {
          let radius= 200;
          var today = new Date();
          var time = today.getHours();
          p.background(255);
          
          let hue0 = 275- 2*(data.temps.temp[time] )
          
          p.fill(hue0,50,70)
          p.beginShape();
          p.noStroke()
          p.circle(250,200,radius)
          
          p.stroke("black");
          
          
          
          
          p.fill(10,50,0)
          p.textSize(30);
          p.text("Today's weather", 130,70)
          p.textSize(20);
          p.text('current temp =', 80, 180);
          p.textSize(90)
          p.text(data.temps.temp[time],225,200)
          p.text("°",400,200)
          p.textSize(20)
          p.text('High:',130,300 )
          p.text(data.temps.maxTemp[0],180,300)
          
          let hue0_h = 275- 2*(data.temps.maxTemp[0] )
          p.fill(hue0_h, 50,70)
          p.stroke(1000,1000)
          p.circle(180,300,60)
          p.fill(0,0,0)
          p.text('High:',130,300 )
          p.text(data.temps.maxTemp[0],180,300)
          
          let hue0_l = 275- 2*(data.temps.minTemp[0] )
          p.fill(hue0_l, 50,70)
          p.stroke(1000,1000)
          p.circle(325,300,60)
          p.fill(0,0,0)
          p.text('Low:',275,300 )
          p.text(data.temps.minTemp[0],325,300)
          
          p.text('4 Day Forcast:', 175,425)
          let hue1 = 275- 2*(data.temps.maxTemp[1] +data.temps.minTemp[1] /2)
          p.fill(hue1, 50,70)
          p.stroke(1000,1000)
          p.circle(55,500,50)
          p.fill(0,0,0)
          p.text('H:',20,490 )
          p.text(data.temps.maxTemp[1],45,490)
          p.text('L:',20,515 )
          p.text(data.temps.minTemp[1],45,515)
          
          
          let x1 = 130
          let hue2 = 275- 2*(data.temps.maxTemp[2] +data.temps.minTemp[2] /2)
          p.fill(hue2, 50,70)
          p.stroke(1000,1000)
          p.circle(55+x1,500,50)
          p.fill(0,0,0)
          p.text('H:',20+x1,490 )
          p.text(data.temps.maxTemp[2],45+x1,490)
          p.text('L:',20+x1,515 )
          p.text(data.temps.minTemp[2],45+x1,515)
          
          let x2 = 260
          let hue3 = 275- 2*(data.temps.maxTemp[3] +data.temps.minTemp[3] /2)
          p.fill(hue3, 50,70)
          p.stroke(1000,1000)
          p.circle(55+x2,500,50)
          p.fill(0,0,0)
          p.text('H:',20+x2,490 )
          p.text(data.temps.maxTemp[3],45+x2,490)
          p.text('L:',20+x2,515 )
          p.text(data.temps.minTemp[3],45+x2,515)
          
          let x3 = 390
          let hue4 = 275- 2*(data.temps.maxTemp[4] +data.temps.minTemp[4] /2)
          p.fill(hue4, 50,70)
          p.stroke(1000,1000)
          p.circle(55+x3,500,50)
          p.fill(0,0,0)
          p.text('H:',20+x3,490 )
          p.text(data.temps.maxTemp[4],45+x3,490)
          p.text('L:',20+x3,515 )
          p.text(data.temps.minTemp[4],45+x3,515)
          
          
          

        };
      };

      let p = undefined;
      const CANVAS_WIDTH = 1000;
      const CANVAS_HEIGHT = 1000;
      // Create P5
      const CANVAS_EL = this.$refs.canvasHolder;
      CANVAS_EL.style.width = CANVAS_WIDTH + "px";
      CANVAS_EL.style.height = CANVAS_HEIGHT + "px";
      new p5(s, CANVAS_EL);
    },

    // We will use your data object as the data for Vue
    data() {
      return data;
    },
    el: "#app",
  });
});
