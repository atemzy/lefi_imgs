import Code from "../Code.js"

export default class setRandomsBlue {
    constructor(){
        this.code = new Code()
        this.RULES = this.code.RULES
        this.interval = this.code.interval
        
        this.bmany = 500;

        this.blu()
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
    blu(){
//BLUE----------------------------------------------------------
//Number of blues
this.bslider = document.querySelectorAll('[id=bmyRange]')
this.boutput = document.getElementById("bdemo");
this.boutput.innerHTML = this.bslider[0].value;

this.bslider[0].oninput = () => {
  this.boutput.innerHTML = this.bslider[0].value;
  this.bmany = this.bslider[0].value;
  this.bslider[1].placeholder = this.bslider[0].value;
}
this.bslider[1].onblur = () => {
  this.bslider[1].placeholder = this.bslider[1].value;
  this.boutput.innerHTML = this.bslider[1].value;
  this.bmany = this.bslider[1].value;
  this.bslider[0].value = this.bslider[1].value;
  this.bslider[1].value = "";
}


//Strong to
//1Blues
this.bxbslider = document.querySelectorAll('[id=bluexbluemyRange]')
this.bxboutput = document.getElementById("bluexbluedemo");
this.bxboutput.innerHTML = this.bxbslider[0].value;


this.bxbslider[0].oninput = () => {
  this.bxboutput.innerHTML = this.bxbslider[0].value;
  this.RULES.blue.blue = this.bxbslider[0].value
  this.bxbslider[1].placeholder = this.bxbslider[0].value;
}
this.bxbslider[1].onblur = () => {
  this.bxbslider[1].placeholder = this.bxbslider[1].value;
  this.bxboutput.innerHTML = this.bxbslider[1].value;
  this.RULES.blue.blue = this.bxbslider[1].value;
  this.bxbslider[0].value = this.bxbslider[1].value;
  this.bxbslider[1].value = "";
}
//2Greens
this.bxgslider = document.querySelectorAll('[id=bluexgreenmyRange]')
this.bxgoutput = document.getElementById("bluexgreendemo");
this.bxgoutput.innerHTML = this.bxgslider[0].value;

this.bxgslider[0].oninput = () => {
  this.bxgoutput.innerHTML = this.bxgslider[0].value;
  this.RULES.blue.green = this.bxgslider[0].value;
  this.bxgslider[1].placeholder = this.bxgslider[0].value;
}
this.bxgslider[1].onblur = () => {
  this.bxgslider[1].placeholder = this.bxgslider[1].value;
  this.bxgoutput.innerHTML = this.bxgslider[1].value;this.value;
  this.RULES.blue.green = this.bxgslider[1].value;
  this.bxgslider[0].value = this.bxgslider[1].value;
  this.bxgslider[1].value = "";
}
//3Yellows

this.bxyslider = document.querySelectorAll('[id=bluexyellowmyRange]')
this.bxyoutput = document.getElementById("bluexyellowdemo");
this.bxyoutput.innerHTML = this.bxyslider[0].value;

this.bxyslider[0].oninput = () => {
  this.bxyoutput.innerHTML = this.bxyslider[0].value;
  this.RULES.blue.yellow = this.bxyslider[0].value;
  this.bxyslider[1].placeholder = this.bxyslider[0].value;
}
this.bxyslider[1].onblur = () => {
  this.bxyslider[1].placeholder = this.bxyslider[1].value;
  this.bxyoutput.innerHTML = this.bxyslider[1].value;
  this.RULES.blue.yellow = this.bxyslider[1].value;
  this.bxyslider[0].value = this.bxyslider[1].value;
  this.bxyslider[1].value = "";
}

//4Reds

this.bxrslider = document.querySelectorAll('[id=bluexredmyRange]')
this.bxroutput = document.getElementById("bluexreddemo");
this.bxroutput.innerHTML = this.bxrslider[0].value;

this.bxrslider[0].oninput = () => {
  this.bxroutput.innerHTML = this.bxrslider[0].value;
  this.RULES.blue.red = this.bxrslider[0].value;
  this.bxrslider[1].placeholder = this.bxrslider[0].value;
}
this.bxrslider[1].onblur = () => {
  this.bxrslider[1].placeholder = this.bxrslider[1].value;
  this.bxroutput.innerHTML = this.bxrslider[1].value;
  this.RULES.blue.red = this.bxrslider[1].value;
  this.bxrslider[0].value = this.bxrslider[1].value;
  this.bxrslider[1].value = "";
}

//---------------------------------------------------------------
    }
    update(){
      this.interval = this.code.interval
    }
  }