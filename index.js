class Polyn {
  constructor(degrees, constants) {
    if(typeof degrees == "string") {
      this.degrees = [];
      this.constants = [];
      let strs = degrees.split("+");
      strs.forEach(s => {
        let hasX = false;
        let hasExp = false;
        for(let i=0; i<s.length;i++) {
          if(s.charAt(i) == "x") {
            this.constants.push(parseInt(s.substring(0,i)));
            hasX = true;
          }
          if(s.charAt(i) == "^") {
            this.degrees.push(parseInt(s.substring(i+1)));
            hasExp = true
          }
        }
      if(hasX && !hasExp) {
         this.degrees.push(1);
      } else if (!hasX && !hasExp) {          
        this.degrees.push(0);
      }
     });
      this.constants.push(parseInt(strs[strs.length-1]));
      console.log(this.constants);
      console.log(this.degrees);
    } else {
    this.ns = ns;
    this.cs = cs;
    }
  }

  toString() {
    
  }

}

let fxn = new Polyn("4x^3+3x^2+2x+1");
