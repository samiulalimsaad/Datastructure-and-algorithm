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

const shortestPath = (edges, node, dest) => {
    const graph = buildGraph(edges);
    const visited = new Set([node]);
    const queue = [[node, 0]];

    while (queue.length) {
        const [curr, distance] = queue.shift();

        if (curr === dest) return distance;

        for (const neighbor of graph[curr]) {
            if (!visited.has(neighbor)) queue.push([neighbor, distance + 1]);
        }
    }
    return -1;
};

const edges = [
    ["w", "x"],
    ["x", "y"],
    ["z", "y"],
    ["z", "v"],
    ["w", "v"],
];

console.log(buildGraph(edges));
console.log(shortestPath(edges, "w", "z"));
