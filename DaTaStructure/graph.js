

class Graph{
    constructor(){
        this.adj_list = {}
        this.vertex = []
    }

    add_vertex(vertex){
        if (!this.vertex.includes(vertex)){
            this.vertex.push(vertex)
            this.adj_list[vertex] = []
        }
    }
    add_edges(v1,v2){
        if (this.vertex.includes(v1) && this.vertex.includes(v2)){
            this.adj_list[v1].push(v2)
            this.adj_list[v2].push(v1)
            return true;
        }
        return false;
    }

    remove_edges(v1,v2){
        if (this.vertex.includes(v1) && this.vertex.includes(v2)){
            let index1 = this.adj_list[v1].indexOf(v2)
            let index2 = this.adj_list[v2].indexOf(v1)
            this.adj_list[v1].splice(index1,1)
             this.adj_list[v2].splice(index2,1)
             return true
        }
        return false
    }

    remove_vertex(vertex){
        if (this.vertex.includes(vertex)){
            for(let other_vertex of this.adj_list[vertex]){
                let index = this.adj_list[other_vertex].indexOf(vertex)
                this.adj_list[other_vertex].splice(index,1)
            }
            delete this.adj_list[vertex]
        }
    }
    print(){
        for(let k in this.adj_list){
            console.log(`${k}:${this.adj_list[k]}`)
        }
    }

}


let g = new Graph
g.add_vertex('A')
g.add_vertex('B')
g.add_vertex('C')
g.add_vertex('D')
g.add_edges('A','B')
g.add_edges('A','C')
g.add_edges('C','D')
g.add_edges('B','D')
g.remove_edges('C','D')
g.remove_vertex("D")
g.print()