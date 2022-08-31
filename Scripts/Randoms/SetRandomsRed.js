import Code from "../Code.js"

export default class setRandomsRed {
    constructor(){
        this.code = new Code()
        this.RULES = this.code.RULES
        this.interval = this.code.interval
        
        this.rmany = 500;

        this.red()
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
    red(){
//RED----------------------------------------------------------
//Number of reds
this.rslider = document.querySelectorAll('[id=rmyRange]')
this.routput = document.getElementById("rdemo");
this.routput.innerHTML = this.rslider[0].value;

this.rslider[0].oninput = () => {
  this.routput.innerHTML = this.rslider[0].value;
  this.rmany = this.rslider[0].value;
  this.rslider[1].placeholder = this.rslider[0].value;
}
this.rslider[1].onblur = () => {
  this.rslider[1].placeholder = this.rslider[1].value;
  this.routput.innerHTML = this.rslider[1].value;
  this.rmany = this.rslider[1].value;
  this.rslider[0].value = this.rslider[1].value;
  this.rslider[1].value = "";
}


//Strong to
//1Reds
this.rxrslider = document.querySelectorAll('[id=redxredmyRange]')
this.rxroutput = document.getElementById("redxreddemo");
this.rxroutput.innerHTML = this.rxrslider[0].value;


this.rxrslider[0].oninput = () => {
  this.rxroutput.innerHTML = this.rxrslider[0].value;
  this.RULES.red.red = this.rxrslider[0].value
  this.rxrslider[1].placeholder = this.rxrslider[0].value;
}
this.rxrslider[1].onblur = () => {
  this.rxrslider[1].placeholder = this.rxrslider[1].value;
  this.rxroutput.innerHTML = this.rxrslider[1].value;
  this.RULES.red.red = this.rxrslider[1].value;
  this.rxrslider[0].value = this.rxrslider[1].value;
  this.rxrslider[1].value = "";
}
//2Greens
this.rxgslider = document.querySelectorAll('[id=redxgreenmyRange]')
this.rxgoutput = document.getElementById("redxgreendemo");
this.rxgoutput.innerHTML = this.rxgslider[0].value;

this.rxgslider[0].oninput = () => {
  this.rxgoutput.innerHTML = this.rxgslider[0].value;
  this.RULES.red.green = this.rxgslider[0].value;
  this.rxgslider[1].placeholder = this.rxgslider[0].value;
}
this.rxgslider[1].onblur = () => {
  this.rxgslider[1].placeholder = this.rxgslider[1].value;
  this.rxgoutput.innerHTML = this.rxgslider[1].value;this.value;
  this.RULES.red.green = this.rxgslider[1].value;
  this.rxgslider[0].value = this.rxgslider[1].value;
  this.rxgslider[1].value = "";
}
//3Blues

this.rxbslider = document.querySelectorAll('[id=redxbluemyRange]')
this.rxboutput = document.getElementById("redxbluedemo");
this.rxboutput.innerHTML = this.rxbslider[0].value;

this.rxbslider[0].oninput = () => {
  this.rxboutput.innerHTML = this.rxbslider[0].value;
  this.RULES.red.blue = this.rxbslider[0].value;
  this.rxbslider[1].placeholder = this.rxbslider[0].value;
}
this.rxbslider[1].onblur = () => {
  this.rxbslider[1].placeholder = this.rxbslider[1].value;
  this.rxboutput.innerHTML = this.rxbslider[1].value;
  this.RULES.red.blue = this.rxbslider[1].value;
  this.rxbslider[0].value = this.rxbslider[1].value;
  this.rxbslider[1].value = "";
}

//4Yellows

this.rxyslider = document.querySelectorAll('[id=redxyellowmyRange]')
this.rxyoutput = document.getElementById("redxyellowdemo");
this.rxyoutput.innerHTML = this.rxyslider[0].value;

this.rxyslider[0].oninput = () => {
  this.rxyoutput.innerHTML = this.rxyslider[0].value;
  this.RULES.red.yellow = this.rxyslider[0].value;
  this.rxyslider[1].placeholder = this.rxyslider[0].value;
}
this.rxyslider[1].onblur = () => {
  this.rxyslider[1].placeholder = this.rxyslider[1].value;
  this.rxyoutput.innerHTML = this.rxyslider[1].value;
  this.RULES.red.yellow = this.rxyslider[1].value;
  this.rxyslider[0].value = this.rxyslider[1].value;
  this.rxyslider[1].value = "";
}

//---------------------------------------------------------------
    }
    update(){
      this.interval = this.code.interval
    }
  }