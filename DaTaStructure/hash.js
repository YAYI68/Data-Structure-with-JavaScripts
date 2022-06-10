


class Hash{
    constructor(size=7){
        this.data= new Array(size)
    }

    _hash(key){
        let my_hash = 0
        for(let val of key){
            my_hash =(my_hash + val.charCodeAt() * 23) % this.data.length
        }
        return my_hash
    }
    set(key,value){
        let index = this._hash(key)
            if (this.data[index] == undefined){
                this.data[index] = []
            }
            this.data[index].push([key,value])
    }

    get(key){
        let index = this._hash(key)
        if (this.data[index] !== undefined ){
            for(let i = 0; i < this.data[index].length;i++){
                if (this.data[index][i][0] === key){
                    return this.data[index][i][1]
                }
            }
        }
        return null;
    }

    keys(){
        let all_keys = []
        for(let i = 0; i< this.data.length;i++){
             if (this.data[i] !== undefined){
                for(let j = 0; j< this.data[i].length;j++){
                    all_keys.push(this.data[i][j][0])
                }
             }
        }
        return all_keys
    }

    values(){
        let all_values = []
        for(let i = 0; i< this.data.length;i++){
             if (this.data[i] !== undefined){
                for(let j = 0; j< this.data[i].length;j++){
                    all_values.push(this.data[i][j][1])
                }
             }
        }
        return all_values
    }

    print(){
        for(let i = 0; i< this.data.length;i++){
            console.log(`${i}:${this.data[i]}`)
        }
    }

}


let h = new Hash()
h.set('a',[1,2])
h.set('b',2)
h.set('b',22)
h.set('c',3)
h.set('d',4)
h.set('e',5)
h.print()
console.log(h.keys())
console.log(h.values())
