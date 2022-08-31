import Code from "../Code.js"

export default class setRandomsYellow {
    constructor(){
        this.code = new Code()
        this.RULES = this.code.RULES
        this.interval = this.code.interval
        
        this.ymany = 500;

        this.yel()
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
    yel(){
//YELLOW----------------------------------------------------------
//Number of yellows
this.yslider = document.querySelectorAll('[id=ymyRange]')
this.youtput = document.getElementById("ydemo");
this.youtput.innerHTML = this.yslider[0].value;

this.yslider[0].oninput = () => {
  this.youtput.innerHTML = this.yslider[0].value;
  this.ymany = this.yslider[0].value;
  this.yslider[1].placeholder = this.yslider[0].value;
}
this.yslider[1].onblur = () => {
  this.yslider[1].placeholder = this.yslider[1].value;
  this.youtput.innerHTML = this.yslider[1].value;
  this.ymany = this.yslider[1].value;
  this.yslider[0].value = this.yslider[1].value;
  this.yslider[1].value = "";
}


//Strong to
//1Yellows
this.yxyslider = document.querySelectorAll('[id=yellowxyellowmyRange]')
this.yxyoutput = document.getElementById("yellowxyellowdemo");
this.yxyoutput.innerHTML = this.yxyslider[0].value;


this.yxyslider[0].oninput = () => {
  this.yxyoutput.innerHTML = this.yxyslider[0].value;
  this.RULES.yellow.yellow = this.yxyslider[0].value
  this.yxyslider[1].placeholder = this.yxyslider[0].value;
}
this.yxyslider[1].onblur = () => {
  this.yxyslider[1].placeholder = this.yxyslider[1].value;
  this.yxyoutput.innerHTML = this.yxyslider[1].value;
  this.RULES.yellow.yellow = this.yxyslider[1].value;
  this.yxyslider[0].value = this.yxyslider[1].value;
  this.yxyslider[1].value = "";
}
//2Greens
this.yxgslider = document.querySelectorAll('[id=yellowxgreenmyRange]')
this.yxgoutput = document.getElementById("yellowxgreendemo");
this.yxgoutput.innerHTML = this.yxgslider[0].value;

this.yxgslider[0].oninput = () => {
  this.yxgoutput.innerHTML = this.yxgslider[0].value;
  this.RULES.yellow.green = this.yxgslider[0].value;
  this.yxgslider[1].placeholder = this.yxgslider[0].value;
}
this.yxgslider[1].onblur = () => {
  this.yxgslider[1].placeholder = this.yxgslider[1].value;
  this.yxgoutput.innerHTML = this.yxgslider[1].value;this.value;
  this.RULES.yellow.green = this.yxgslider[1].value;
  this.yxgslider[0].value = this.yxgslider[1].value;
  this.yxgslider[1].value = "";
}
//3Blues

this.yxbslider = document.querySelectorAll('[id=yellowxbluemyRange]')
this.yxboutput = document.getElementById("yellowxbluedemo");
this.yxboutput.innerHTML = this.yxbslider[0].value;

this.yxbslider[0].oninput = () => {
  this.yxboutput.innerHTML = this.yxbslider[0].value;
  this.RULES.yellow.blue = this.yxbslider[0].value;
  this.yxbslider[1].placeholder = this.yxbslider[0].value;
}
this.yxbslider[1].onblur = () => {
  this.yxbslider[1].placeholder = this.yxbslider[1].value;
  this.yxboutput.innerHTML = this.yxbslider[1].value;
  this.RULES.yellow.blue = this.yxbslider[1].value;
  this.yxbslider[0].value = this.yxbslider[1].value;
  this.yxbslider[1].value = "";
}

//4Reds

this.yxrslider = document.querySelectorAll('[id=yellowxredmyRange]')
this.yxroutput = document.getElementById("yellowxreddemo");
this.yxroutput.innerHTML = this.yxrslider[0].value;

this.yxrslider[0].oninput = () => {
  this.yxroutput.innerHTML = this.yxrslider[0].value;
  this.RULES.yellow.red = this.yxrslider[0].value;
  this.yxrslider[1].placeholder = this.yxrslider[0].value;
}
this.yxrslider[1].onblur = () => {
  this.yxrslider[1].placeholder = this.yxrslider[1].value;
  this.yxroutput.innerHTML = this.yxrslider[1].value;
  this.RULES.yellow.red = this.yxrslider[1].value;
  this.yxrslider[0].value = this.yxrslider[1].value;
  this.yxrslider[1].value = "";
}

//---------------------------------------------------------------
    }
    update(){
      this.interval = this.code.interval
    }
  }