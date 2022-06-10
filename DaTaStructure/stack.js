



class Node {
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class Stack{
    constructor(value){
        let new_node = new Node(value)
        this.top = new_node
        this.length = 1
    }

    push(value){
        let new_node = new Node(value)
        if (this.length == 0){
            this.top = new_node
        }
        else{
            new_node.next = this.top
            this.top = new_node
        }
        this.length++;
    }

    pop(){
        let temp;
        if(this.length <=1){
            this.top = null;
        }
        else{
            temp = this.top
            this.top = this.top.next
            temp.next = null;
            }
        this.length--;
        return temp;
    }
}
s = new Stack(1)
s.pop();
console.log(s)