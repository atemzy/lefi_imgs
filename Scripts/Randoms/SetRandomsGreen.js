import Code from "../Code.js"

export default class setRandomsGreen {
    constructor(){
        this.code = new Code()
        this.RULES = this.code.RULES
        this.interval = this.code.interval
        
        this.gmany = 500;

        this.gre()
        this.setRandomYellow()
        this.setRandomRed()
        this.setRandomGreen()
        this.setRandomBlue()
    }


    setRandomYellow(){
      const arr = [];
      for(var i = this.interval; i > -1; i--){
        var rand1 = (Math.random() * (i - 0 + 1) + 0);
        arr.push(rand1)
        //console.log(rand1, i)
      }
      
      for(var e = -this.interval; e < 1; e++){
        var rand2 = (Math.random() * (e - 0 + 1) + 0);
        arr.push(rand2)
        //console.log(rand2, e)
      }
      
      
      const randomIndex = Math.floor(Math.random() * arr.length);
      const item = arr[randomIndex]
            
        return item;
    }
    setRandomRed(){
      const arr = [];
      for(var i = this.interval; i > -1; i--){
        var rand1 = (Math.random() * (i - 0 + 1) + 0);
        arr.push(rand1)
        //console.log(rand1, i)
      }
      
      for(var e = -this.interval; e < 1; e++){
        var rand2 = (Math.random() * (e - 0 + 1) + 0);
        arr.push(rand2)
        //console.log(rand2, e)
      }
      
      
      const randomIndex = Math.floor(Math.random() * arr.length);
      const item = arr[randomIndex]
            
        return item;
    }
    setRandomBlue(){
      const arr = [];
      for(var i = this.interval; i > -1; i--){
        var rand1 = (Math.random() * (i - 0 + 1) + 0);
        arr.push(rand1)
        //console.log(rand1, i)
      }
      
      for(var e = -this.interval; e < 1; e++){
        var rand2 = (Math.random() * (e - 0 + 1) + 0);
        arr.push(rand2)
        //console.log(rand2, e)
      }
      
      
      const randomIndex = Math.floor(Math.random() * arr.length);
      const item = arr[randomIndex]
            
        return item;
    }
    setRandomGreen(){
      const arr = [];
      for(var i = this.interval; i > -1; i--){
        var rand1 = (Math.random() * (i - 0 + 1) + 0);
        arr.push(rand1)
        //console.log(rand1, i)
      }
      
      for(var e = -this.interval; e < 1; e++){
        var rand2 = (Math.random() * (e - 0 + 1) + 0);
        arr.push(rand2)
        //console.log(rand2, e)
      }
      
      
      const randomIndex = Math.floor(Math.random() * arr.length);
      const item = arr[randomIndex]
            
        return item;
    }
    gre(){
//GREEN----------------------------------------------------------
//Number of greens
this.gslider = document.querySelectorAll('[id=gmyRange]')
this.goutput = document.getElementById("gdemo");
this.goutput.innerHTML = this.gslider[0].value;

this.gslider[0].oninput = () => {
  this.goutput.innerHTML = this.gslider[0].value;
  this.gmany = this.gslider[0].value;
  this.gslider[1].placeholder = this.gslider[0].value;
}
this.gslider[1].onblur = () => {
  this.gslider[1].placeholder = this.gslider[1].value;
  this.goutput.innerHTML = this.gslider[1].value;
  this.gmany = this.gslider[1].value;
  this.gslider[0].value = this.gslider[1].value;
  this.gslider[1].value = "";
}


//Strong to
//1Greens
this.gxgslider = document.querySelectorAll('[id=greenxgreenmyRange]')
this.gxgoutput = document.getElementById("greenxgreendemo");
this.gxgoutput.innerHTML = this.gxgslider[0].value;


this.gxgslider[0].oninput = () => {
  this.gxgoutput.innerHTML = this.gxgslider[0].value;
  this.RULES.green.green = this.gxgslider[0].value
  this.gxgslider[1].placeholder = this.gxgslider[0].value;
}
this.gxgslider[1].onblur = () => {
  this.gxgslider[1].placeholder = this.gxgslider[1].value;
  this.gxgoutput.innerHTML = this.gxgslider[1].value;
  this.RULES.green.green = this.gxgslider[1].value;
  this.gxgslider[0].value = this.gxgslider[1].value;
  this.gxgslider[1].value = "";
}
//2Yellows
this.gxyslider = document.querySelectorAll('[id=greenxyellowmyRange]')
this.gxyoutput = document.getElementById("greenxyellowdemo");
this.gxyoutput.innerHTML = this.gxyslider[0].value;

this.gxyslider[0].oninput = () => {
  this.gxyoutput.innerHTML = this.gxyslider[0].value;
  this.RULES.green.yellow = this.gxyslider[0].value;
  this.gxyslider[1].placeholder = this.gxyslider[0].value;
}
this.gxyslider[1].onblur = () => {
  this.gxyslider[1].placeholder = this.gxyslider[1].value;
  this.gxyoutput.innerHTML = this.gxyslider[1].value;this.value;
  this.RULES.green.yellow = this.gxyslider[1].value;
  this.gxyslider[0].value = this.gxyslider[1].value;
  this.gxyslider[1].value = "";
}
//3Blues

this.gxbslider = document.querySelectorAll('[id=greenxbluemyRange]')
this.gxboutput = document.getElementById("greenxbluedemo");
this.gxboutput.innerHTML = this.gxbslider[0].value;

this.gxbslider[0].oninput = () => {
  this.gxboutput.innerHTML = this.gxbslider[0].value;
  this.RULES.green.blue = this.gxbslider[0].value;
  this.gxbslider[1].placeholder = this.gxbslider[0].value;
}
this.gxbslider[1].onblur = () => {
  this.gxbslider[1].placeholder = this.gxbslider[1].value;
  this.gxboutput.innerHTML = this.gxbslider[1].value;
  this.RULES.green.blue = this.gxbslider[1].value;
  this.gxbslider[0].value = this.gxbslider[1].value;
  this.gxbslider[1].value = "";
}

//4Reds

this.gxrslider = document.querySelectorAll('[id=greenxredmyRange]')
this.gxroutput = document.getElementById("greenxreddemo");
this.gxroutput.innerHTML = this.gxrslider[0].value;

this.gxrslider[0].oninput = () => {
  this.gxroutput.innerHTML = this.gxrslider[0].value;
  this.RULES.green.red = this.gxrslider[0].value;
  this.gxrslider[1].placeholder = this.gxrslider[0].value;
}
this.gxrslider[1].onblur = () => {
  this.gxrslider[1].placeholder = this.gxrslider[1].value;
  this.gxroutput.innerHTML = this.gxrslider[1].value;
  this.RULES.green.red = this.gxrslider[1].value;
  this.gxrslider[0].value = this.gxrslider[1].value;
  this.gxrslider[1].value = "";
}

//---------------------------------------------------------------
    }
    update(){
      this.interval = this.code.interval
    }
  }