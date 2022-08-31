import SetRandomsBlue from './Randoms/SetRandomsBlue.js'
import SetRandomsRed from './Randoms/SetRandomsRed.js'
import SetRandomsYellow from './Randoms/SetRandomsYellow.js'
import SetRandomsGreen from './Randoms/SetRandomsGreen.js'
import Maine from './Maine.js'

export default class Code{
    static instance;
    constructor(canvas){
        if(Code.instance){
            return Code.instance
        }
        Code.instance = this;
        this.interval = 10;
        this.canvas = canvas;
        this.RULES = {
            green: {
              green: 0.878214014158254,
              red: 0.383942932294564,
              yellow: 0.3632328353781209,
              blue: 0.4357079645785089,
            },
            red: {
              green: -0.8131279812066854,
              red: 0.8761564046567396,
              yellow: -0.686246916739194,
              blue: -0.42403398294928163,
            },
            yellow: {
              green: 0.8283611643992606,
              red: -0.8050409003234531,
              yellow: 0.8422661062679588,
              blue: -0.6206303204367405,
            },
            blue: {
              green: -0.6276679142294777,
              red: -0.48726835984229977,
              yellow: -0.8155039608681607,
              blue: 0.49503848830455155,
            },
          };
        this.setRandomsBlue = new SetRandomsBlue()
        this.setRandomsRed = new SetRandomsRed()
        this.setRandomsYellow = new SetRandomsYellow()
        this.setRandomsGreen = new SetRandomsGreen()
        this.maine = new Maine()
        

        this.update()
    }

    update(){
        this.maine.update();
        this.maine.update1();
       
    }
}

