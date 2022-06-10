class Node {
    constructor(value){
        this.value = value
        this.right = null;
        this.left = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
    insert(node){
       let new_node = new Node(node)
        if (this.root == null){
            this.root = new_node;
        }
        let temp = this.root
        while (temp){
            if (new_node.value == temp.value)return false;
            else if (new_node.value < temp.value){
                if(temp.left === null){
                    temp.left = new_node
                }
                temp = temp.left
            }
            else{
                if (temp.right === null){
                    temp.right = new_node
                }
                temp = temp.right;
            
            }
        }
    }
    contains(value){
        let temp = this.root
        while (temp){
            if(value < temp.value){
                temp = temp.left
            }
            else if (value > temp.value){
                temp = temp.right
            }
            else{
                return true
            }
        }
    }

    minval(){
      let temp = this.root;
        while (temp.left){
            temp = temp.left
        }
        return temp
    }

    maxval(){
       let temp = this.root;
        while (temp.right){
            temp = temp.right;
        }
        return temp
    }
    levelOrder(){
        let result = []
        let queue = []
        let current = this.root
        queue.push(current)
        while (queue.length > 0){
            current = queue.shift()
            result.push(current.value)
            if (current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }    
        }
       return result  
    }
    preOrder(){
       let  result = []
       let temp = this.root
       function traverse(node){
           result.push(node.value)
           if (node.left){
               traverse(node.left)
           }
           if (node.right){
               traverse(node.right)
           }
       }
       traverse(temp)
       return result
    }

    inOrder(){
        let result = []
        function traverse(node) {
            if (node.left){
                traverse(node.left)
            }
            result.push(node.value)
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(this.root)
        return result
    }

    postOrder(){
        let result = []
        function traverse(node) {
            if (node.left){
                traverse(node.left)
            }
            if (node.right){
                traverse(node.right)
            }
            result.push(node.value)
        }
        traverse(this.root)
        return result
    }
}


let t = new Tree()
t.insert(47)
t.insert(21)
t.insert(76)
t.insert(18)
t.insert(27)
t.insert(52)
t.insert(82)
// console.log(t)
console.log(t.preOrder())
console.log(t.inOrder())
console.log(t.postOrder())
console.log(t.levelOrder())

