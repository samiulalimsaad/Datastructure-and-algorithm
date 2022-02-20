const hasPathBFS = (graph, node, dest) => {
    const queue = [node];
    while (queue.length) {
        const crr = queue.shift();
        for (const child of graph[crr]) {
            if (child === dest) return true;
            queue.push(child);
        }
    }
    return false;
};

const hasPathDFS = (graph, node, dest) => {
    if (node === dest) return true;
    for (const child of graph[node]) {
        if (hasPathDFS(graph, child, dest)) return true;
    }
    return false;
};

const graph = {
    f: ["g", "i"],
    g: ["h"],
    h: [],
    i: ["g", "k"],
    j: ["i"],
    k: [],
};

console.log("BFS : ", hasPathBFS(graph, "f", "k"));
console.log();
console.log("DFS : ", hasPathDFS(graph, "f", "k"));
