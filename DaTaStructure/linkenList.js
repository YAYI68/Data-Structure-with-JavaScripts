class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        let new_node = new Node(value);
        this.head = new_node
        this.tail = new_node
        this.length = 1
    }

    append(value){
        let new_node = new Node(value);
        if (this.length == 0){
            this.head = new_node
            this.tail = new_node
            return true;
        }
        else{
            this.tail.next = new_node 
            this.tail = new_node        
        }
        this.length++;
        return true;
    }

    prepend(value){
        let new_node = new Node(value);
        if (this.length == 0){
            this.head = new_node
            this.tail = new_node
            return true;
        }
        else{
          new_node.next = this.head
          this.head = new_node;  
        }
        this.length++;
        return true
    }

    pop_first(){
       let temp = this.head;
        if (this.length == 0){
            return null
        }
        if (this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = this.head.next
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    pop(){
        let temp = this.head
        let prev = null;
        if (this.length ==0){
            return null;
        }
        if (this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            while (temp.next){
                prev = temp
                temp = temp.next
            }
            this.tail = prev;
            this.tail.next = null;
        }
        this.length--;
        return temp
    }

    get(index){
        if (index < 0 || index >= this.length){
            return null;
        }
        let temp = this.head
        let i = 0
        while (i < index) {
            temp = temp.next
            i++;
        }
        return temp
    }

    insert(index, value){
        if (index < 0 || index > this.length){
            return null;
        }
        if (index === 0){
            return this.prepend(value)
        }
        if (index === this.length){
            return this.append(value)
        }
        else {
            let new_node = new Node(value)
            let temp = this.get(index - 1)
            let after = temp.next
            temp.next = new_node
            new_node.next = after
        }
        this.length++;
    }

    set(index, value){
        let temp = this.get(index)
        if (temp){
            temp.value = value;
            return true;
        }
        return true;
    }

    remove(index){
        let temp;
        if (index < 0 || index >= this.length){
            return null;
        }
        if ( index === 0 ){
            return this.pop_first()
        }
        if ( index === this.length){
            return this.pop()
        }
        else{
            let prev = this.get(index-1)
            temp = prev.next
            let after = temp.next
            prev.next = after
            temp.next = null;
        }
        this.length--;
        return temp   
    }
    reverse(){
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let before = null;
        let after = temp.next;
        let i = 0;

        while (i < this.length){
            after = temp.next
            temp.next = before
            before = temp
            temp = after
            i++;
        }
    }
    print(){
        let temp = this.head
        let lst = []
        while (temp){
            lst.push(temp.value)
            temp = temp.next;
        }
        let result = lst.join('->');
        console.log(result)
    }
}

let l = new LinkedList(2)
l.append(3)
l.prepend(1)
l.reverse()
console.log(l.print())
console.log(l.length)
console.log(l.get(2))