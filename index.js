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
      //console.log(this.constants);
      //console.log(this.degrees);
    } else {
    this.ns = ns;
    this.cs = cs;
    }
  }

  toString() {
    let str = "";
    for(let i=0; i<this.constants.length; i++) {
      str += this.constants[i]
      if(this.degrees[i] >= 1) {
        str += "x";
      }
      if(this.degrees[i] < 4) {
        switch (this.degrees[i]) {
            case 2: str+="\u00B2"
                    break;
            case 3: str+="\u00B3"
                    break
        }
      } else {
        switch(this.degrees[i]) {
          case 4: str+="\u2074"
                  break;
          case 5: str+="\u2075"
                  break;
          case 6: str+="\u2076"
                  break;
          case 7: str+="\u2077"
                  break;
          case 8: str+="\u2078"
                  break;
          case 9: str+="\u2079"
                  break;
          }
      }
      if(this.constants.length-1 != i) {
        str += "+";
      }
    }
    return str;
  }
}

let poly = "4x^3+3x^2+2x+1";
console.log(poly);
let fxn = new Polyn(poly);
console.log(fxn.toString());
