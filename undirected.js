const buildGraph = (nodes) => {
    const graph = {};

    for (const node of nodes) {
        const [a, b] = node;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};

const hasPathDFS = (graph, node, dest, visited = new Set()) => {
    if (node === dest) return true;
    if (visited.has(node)) return false;

    visited.add(node);

    for (const child of graph[node]) {
        if (hasPathDFS(graph, child, dest)) return true;
    }

    return false;
};

const undirectedGraphPath = (nodes, src, dest) => {
    const graph = buildGraph(nodes);
    return hasPathDFS(graph, src, dest, new Set());
};

const nodes = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
];

console.log(undirectedGraphPath(nodes, "j", "m"));
