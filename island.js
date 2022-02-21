const explore = (graph, i, j, visited) => {
    const rowInbound = 0 <= i && i < graph.length;
    const colInbound = 0 <= j && j < graph[i]?.length;
    const pos = i + "," + j;

    if (!rowInbound || !colInbound) return false;
    if (graph[i][j] === 0) return false;
    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(graph, i + 1, j, visited);
    explore(graph, i - 1, j, visited);
    explore(graph, i, j + 1, visited);
    explore(graph, i, j - 1, visited);

    return true;
};

const isLandCount = (graph) => {
    const visited = new Set();
    let count = 0;
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (explore(graph, i, j, visited)) ++count;
        }
    }
    return count;
};

const river = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
];

console.log(isLandCount(river));
