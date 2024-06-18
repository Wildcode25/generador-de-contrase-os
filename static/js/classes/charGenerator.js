export class CharGenerator{
    constructor(range){
        this.isChecked=false;
        this.range=range; //codes range
    }
    getChar(){
        const code = getCode(this.range[0], this.range[1])
        return String.fromCharCode(code)

    }
    setCheck(){
        if(this.isChecked){
            this.isChecked=false
        }
        else this.isChecked=true
    }
}

function getCode(min, max){
    return Math.floor(Math.random()*(max-min)+1)+min;
}