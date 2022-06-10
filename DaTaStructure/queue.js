
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value){
        let new_node = new Node(value);
        this.first = new_node
        this.last = new_node
        this.length = 1
    }

    enqueue(value){
        let new_node = new Node(value);
        if (this.length ===0){
            this.first = new_node
            this.last = new_node;
        }
        else{
            this.last.next = new_node
            this.last = new_node 
        }
        this.length++;
    }
    dequeue(){
        let temp;
        if (this.length <=1){
            this.first = null;
            this.last = null;
        }
        else{
            temp = this.first
            this.first = this.first.next 
            temp.next = null;
        }
        return temp;
    } 
}

let q = new Queue(1)
q.enqueue(2)
console.log(q)