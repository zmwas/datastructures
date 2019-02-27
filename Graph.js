class Graph() {
    constructor() {
        this.edges = {};
        this.vertices = [];
    }
    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }

    addEdge(vertex1, vertex1) {
        this.edges[vertex1].push(vertex1);
        this.edges[vertex2].push(vertex2);
    }

    removeEdge(vertex1, vertex2) {
        if (this.edges[edge]) {
            this.edges.filter(v=> v != vertex1);
            this.edges.filter(v=> v != vertex2);

        }
    }

    removeVertex(vertex) {
        this.vertices.filter(v=> v != vertex)
    }
}