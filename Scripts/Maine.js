import Code from "./Code.js";
var imgred = new Image()
imgred.src = "public/red.png"
//imgred.src = "public/1.png"
var imgblue = new Image()
imgblue.src = "public/blue.png"
//imgblue.src = "public/2.png"
var imgyellow = new Image()
imgyellow.src = "public/yellow.png"
//imgyellow.src = "public/3.png"
var imggreen = new Image()
imggreen.src = "public/green.png"
//imggreen.src = "public/4.png"
export default class Maine {
  
  constructor() {
    this.code = new Code()
    this.setRandomsRed = this.code.setRandomsRed
    this.setRandomsYellow = this.code.setRandomsYellow
    this.setRandomsBlue = this.code.setRandomsBlue
    this.setRandomsGreen = this.code.setRandomsGreen
    this.fps = 60;
    this.inter = 10;
    this.gmany = this.code.setRandomsGreen.gmany;
    this.bmany = this.code.setRandomsBlue.bmany;
    this.ymany = this.code.setRandomsYellow.ymany;
    this.rmany = this.code.setRandomsRed.rmany;
    
    this.atomsize = 20

    this.prevWidth = 700
    this.prevHeight = 700
    
    this.imgs = [
      { name:"yellow", value:imgyellow},
      { name:"red", value:imgred},
      { name:"green", value:imggreen},
      { name:"blue", value:imgblue}
  ];
  
    
    this.bluemehet = true
    this.greenmehet = true
    this.redmehet = true
    this.yellowmehet = true
    
    this.lenyomvab = false
    this.lenyomvay = false
    this.lenyomvag = false
    this.lenyomvar = false
    
    this.fullscreenEd = false
    
    this.canvas = document.getElementById("life");
    this.m = this.canvas.getContext("2d");
    this.atoms = [];
    this.ctx = this.canvas.getContext("2d");
    
    this.RULES = this.code.RULES
    //console.log(this.RULES.red.red)
    
    this.getHeight()
    this.getWidth()
    
    this.setEverything()
    /*this.draw()
    this.atom()
    this.random()
    this.create()
    this.remove()*/
    this.applyRules()
    this.another()
    
    this.setRandomsYellow.yel()
    this.setRandomsRed.red()
    this.setRandomsBlue.blu()
    this.setRandomsGreen.gre()
    this.indito()
  }
  getWidth = () => {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  getHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }


  setEverything() {
    this.fpsslider = document.getElementById("fpsmyRange");
    this.fpsoutput = document.getElementById("fpsdemo");
    this.fpsoutput.innerHTML = this.fpsslider.value;

    this.fpsslider.oninput = () => {
      this.fpsoutput.innerHTML = this.fpsslider.value;
      this.fps = this.fpsslider.value;
      if (this.fpsslider.value == 0) {
        this.fps = 0.00001;
      }
    }
    
    
    this.interslider = document.querySelectorAll('[id=intermyRange]')
    this.interoutput = document.getElementById("interdemo");
    this.interoutput.innerHTML = this.interslider[0].value;
    
    this.interslider[0].oninput = () => {
      this.interoutput.innerHTML = this.interslider[0].value;
      this.inter = this.interslider[0].value;
      this.code.interval = this.inter
      this.interslider[1].placeholder = this.interslider[0].value;
    }
    this.interslider[1].onblur = () => {
      this.interslider[1].placeholder = this.interslider[1].value;
      this.interoutput.innerHTML = this.interslider[1].value;
      this.inter = this.interslider[1].value
      this.code.interval = this.inter
      this.interslider[0].value = this.interslider[1].value;
      this.interslider[1].value = "";
    }
    
    /*Random----------------------------------------------------------------------------------*/
  }
  draw(x, y, c, w, h) {
    this.m.fillStyle = c;
    this.m.fillRect(x, y, w, h);
  };
  drawAtom(x, y, c, w, h) {
    /*function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const rndInt = randomIntFromInterval(0, 3)
*/
    let obj = this.imgs.find(o => o.name === c);
    /*console.log(rndInt)
    console.log(this.imgs[rndInt])*/
    this.ctx.drawImage(obj.value, x, y, w, h);
    /*this.m.fillStyle = c;
    this.m.fillRect(x, y, w, h)
    */

  }
  atom(x, y, c) {
    return { x: x, y: y, vx: 0, vy: 0, color: c };
  };
  random() {
    return Math.random() * (this.canvas.height - 100) + 50;
  };
  create(number, color) {
    for (let i = 0; i < number; i++) {
      this.atoms.push(this.atom(this.random(), this.random(), color));
    }
  };
  remove(number, color) {
    for (let i = 0; i < number; i++) {
      this.atoms.remove(this.atom(random(), random(), color));
    }
  };


  applyRules() {
    for (let i = 0; i < this.atoms.length; i++) {
      let fx = 0;
      let fy = 0;
      const a = this.atoms[i];
      for (let j = 0; j < this.atoms.length; j++) {
        if (j !== i) {
          const b = this.atoms[j];
          const g = this.RULES[a.color][b.color];
          if (g !== undefined) {
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            if (dx !== 0 || dy !== 0) {
              const d = dx * dx + dy * dy;
              if (d < 6400) {
                const F = g / Math.sqrt(d);
                fx += F * dx;
                fy += F * dy;
              }
            }
          }
        }
      }
      a.vx = (a.vx + fx) * 0.5;
      a.vy = (a.vy + fy) * 0.5;
      a.x += a.vx;
      a.y += a.vy;
      if (a.x <= 0) {
        a.vx *= -1;
        a.x = 0;
      }
      if (a.x >= this.canvas.width) {
        a.vx *= -1;
        a.x = this.canvas.width;
      }
      if (a.y <= 0) {
        a.vy *= -1;
        a.y = 0;
      }
      if (a.y >= this.canvas.height) {
        a.vy *= -1;
        a.y = this.canvas.height;
      }
    }
  };

  another() {
    this.create(this.ymany, "yellow");
    this.create(this.rmany, "red");
    this.create(this.gmany, "green");
    this.create(this.bmany, "blue");


    document.getElementById("reseto").addEventListener("click", () => {
      this.atoms.length = 0
      this.m.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.create(this.ymany, "yellow");
      this.create(this.rmany, "red");
      this.create(this.gmany, "green");
      this.create(this.bmany, "blue");
    })


    document.getElementById("unrandb").addEventListener("click", () => {
      if (this.lenyomvab) {
        document.getElementById("unrandb").innerHTML = "Disable Blue Randomisation"
        document.getElementById("unrandb").style.backgroundColor = "white";
        this.bluemehet = true
        this.lenyomvab = false

      } else {
        document.getElementById("unrandb").innerHTML = "Enable Blue Randomisation"
        this.bluemehet = false
        document.getElementById("unrandb").style.backgroundColor = "rgb(185, 185, 185)";
        this.lenyomvab = true
      }
    })


    document.getElementById("unrandr").addEventListener("click", () => {
      if (this.lenyomvar) {
        document.getElementById("unrandr").innerHTML = "Disable Red Randomisation"
        document.getElementById("unrandr").style.backgroundColor = "white";
        this.redmehet = true
        this.lenyomvar = false

      } else {
        document.getElementById("unrandr").innerHTML = "Enable Red Randomisation"
        this.redmehet = false
        document.getElementById("unrandr").style.backgroundColor = "rgb(185, 185, 185)";
        this.lenyomvar = true
      }
    })


    document.getElementById("unrandy").addEventListener("click", () => {
      if (this.lenyomvay) {
        document.getElementById("unrandy").innerHTML = "Disable Yellow Randomisation"
        document.getElementById("unrandy").style.backgroundColor = "white";
        this.yellowmehet = true
        this.lenyomvay = false

      } else {
        document.getElementById("unrandy").innerHTML = "Enable Yellow Randomisation"
        this.yellowmehet = false
        document.getElementById("unrandy").style.backgroundColor = "rgb(185, 185, 185)";
        this.lenyomvay = true
      }
    })


    document.getElementById("unrandg").addEventListener("click", () => {
      if (this.lenyomvag) {
        document.getElementById("unrandg").innerHTML = "Disable Green Randomisation"
        document.getElementById("unrandg").style.backgroundColor = "white";
        this.greenmehet = true
        this.lenyomvag = false

      } else {
        document.getElementById("unrandg").innerHTML = "Enable Green Randomisation"
        this.greenmehet = false
        document.getElementById("unrandg").style.backgroundColor = "rgb(185, 185, 185)";
        this.lenyomvag = true
      }
    })

    document.getElementById("fullscreen").addEventListener("click", () => {
      this.fullscreenEd = true
      document.getElementsByClassName("bodyt")[0].style.display = "none"
      document.getElementsByClassName("bodyt")[1].style.display = "none"
      document.getElementById("life").width = this.getWidth();
      document.getElementById("life").height = this.getHeight();

    })

    document.getElementById("life").addEventListener("click", () => {
      if (this.fullscreenEd) {
        this.fullscreenEd = false
      } else {
        this.fullscreenEd = true
      }
    })
    window.addEventListener("keydown", (e) => {
      //console.log(e.keyCode);
      if (e.keyCode === 122 && e.target === document.body) {
        if (this.fullscreenEd) {
          this.fullscreenEd = false
        } else {
          this.fullscreenEd = true
        }

      } else if (e.keyCode === 77 && e.target === document.body) {
      }
    });

  }


  update = () => {
    if (window.matchMedia("(min-width: 969px)").matches) {
      this.prevHeight = 700
      this.prevWidth = 700
    } else {
      this.prevHeight = 200
      this.prevWidth = 200
      document.getElementById("life").width = 200;
      document.getElementById("life").height = 200;
    }
    if (this.fullscreenEd) {
      document.getElementById("life").width = this.getWidth();
      document.getElementById("life").height = this.getHeight();
      document.getElementsByClassName("bodyt")[0].style.display = "none"
      document.getElementsByClassName("bodyt")[1].style.display = "none"
      document.body.style.overflow = "hidden";
    }
    else {
      document.getElementById("life").width = this.prevWidth
      document.getElementById("life").height = this.prevHeight
      document.getElementsByClassName("bodyt")[0].style.display = "block"
      document.getElementsByClassName("bodyt")[1].style.display = "inline-block"
      document.body.style.overflow = "visible";


    }
    this.canvas = document.getElementById("life");
    //console.log(this.canvas.width)
    this.code.setRandomsYellow.update()
    this.code.setRandomsGreen.update()
    this.code.setRandomsBlue.update()
    this.code.setRandomsRed.update()
    this.ymany = this.code.setRandomsYellow.ymany;
    this.gmany = this.code.setRandomsGreen.gmany;
    this.bmany = this.code.setRandomsBlue.bmany;
    this.rmany = this.code.setRandomsRed.rmany;
    this.applyRules();
    //console.log(this.canvas.height)
    this.m.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.draw(0, 0, "black", this.canvas.width, this.canvas.height);
    for (var i = 0; i < this.atoms.length; i += 1) {
      this.drawAtom(this.atoms[i].x, this.atoms[i].y, this.atoms[i].color, this.atomsize, this.atomsize);
    }
    setTimeout(() => {
      requestAnimationFrame(this.update);
    }, 1000 / this.fps);

  };

  bluerand = () => {
    //Blue Rand
    if (this.bluemehet) {
      this.btob = this.setRandomsBlue.setRandomBlue()
      this.btog = this.setRandomsBlue.setRandomGreen()
      this.btoy = this.setRandomsBlue.setRandomYellow()
      this.btor = this.setRandomsBlue.setRandomRed()
      this.RULES.blue.blue = this.btob;
      this.RULES.blue.green = this.btog;
      this.RULES.blue.red = this.btor;
      this.RULES.blue.yellow = this.btoy;
      //.log(this.code.interval)
      //console.log("bluerandvege",this.btob,this.btog,this.btor,this.btoy)

    }
    setTimeout(() => {
      requestAnimationFrame(this.bluerand);
    }, 400000 / this.fps);
  }

  greenrand = () => {
    //Green Rand
    if (this.greenmehet) {
      this.gtog = this.setRandomsGreen.setRandomGreen()
      this.gtob = this.setRandomsGreen.setRandomBlue()
      this.gtoy = this.setRandomsGreen.setRandomYellow()
      this.gtor = this.setRandomsGreen.setRandomRed()
      this.RULES.green.green = this.gtog;
      this.RULES.green.blue = this.gtob;
      this.RULES.green.red = this.gtor;
      this.RULES.green.yellow = this.gtoy;
      //console.log("greenrandvege")
    }
    setTimeout(() => {
      requestAnimationFrame(this.greenrand);
    }, 400000 / this.fps);
  }

  redrand = () => {
    //Red Rand
    if (this.redmehet) {
      this.rtor = this.setRandomsRed.setRandomRed()
      this.rtog = this.setRandomsRed.setRandomGreen()
      this.rtoy = this.setRandomsRed.setRandomYellow()
      this.rtob = this.setRandomsRed.setRandomBlue()
      this.RULES.red.red = this.rtor;
      this.RULES.red.green = this.rtog;
      this.RULES.red.blue = this.rtob;
      this.RULES.red.yellow = this.rtoy;
      //console.log("redrandvege")
    }

    setTimeout(() => {
      requestAnimationFrame(this.redrand);
    }, 400000 / this.fps);
  }

  yellowrand = () => {
    //Yellow Rand
    if (this.yellowmehet) {
      this.ytoy = this.setRandomsYellow.setRandomYellow()
      this.ytog = this.setRandomsYellow.setRandomGreen()
      this.ytob = this.setRandomsYellow.setRandomBlue()
      this.ytor = this.setRandomsYellow.setRandomRed()
      this.RULES.yellow.yellow = this.ytoy;
      this.RULES.yellow.green = this.ytog;
      this.RULES.yellow.red = this.ytor;
      this.RULES.yellow.blue = this.ytob;
      //console.log("yellowrandvege")
    }

    setTimeout(() => {
      requestAnimationFrame(this.yellowrand);
    }, 400000 / this.fps);
  }

  indito() {
    this.bluerand()
    setTimeout(() => {
      this.greenrand()
    }, 100000 / this.fps);
    setTimeout(() => {
      this.redrand()
    }, 200000 / this.fps);
    setTimeout(() => {
      this.yellowrand()
    }, 300000 / this.fps);
  }

  update1 = () => {
    this.applyRules()
    //console.log("randvege")
    setTimeout(() => {
      requestAnimationFrame(this.update1);
    }, 100000 / this.fps);
  }
}
