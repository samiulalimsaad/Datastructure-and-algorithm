const explore = (graph, i, j, visited) => {
    const rowInbound = 0 <= i && i < graph.length;
    const colInbound = 0 <= j && j < graph[i]?.length;
    const pos = i + "," + j;

    if (!rowInbound || !colInbound) return 0;
    if (graph[i][j] === 0) return 0;
    if (visited.has(pos)) return 0;
    visited.add(pos);

    let size = 1;
    size += explore(graph, i + 1, j, visited);
    size += explore(graph, i - 1, j, visited);
    size += explore(graph, i, j + 1, visited);
    size += explore(graph, i, j - 1, visited);

    return size;
};

const isLandCount = (graph) => {
    const visited = new Set();
    let min = Infinity;
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            const size = explore(graph, i, j, visited);
            if (size && size < min) min = size;
        }
    }
    console.log(visited);
    return min;
};

const river = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
];

console.log(isLandCount(river));
