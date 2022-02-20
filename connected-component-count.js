const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;
    visited.add(String(current));

    for (const node of graph[current]) {
        explore(graph, node, visited);
    }
    return true;
};

const connectedComponentCount = (graph) => {
    const visited = new Set();
    let count = 0;
    for (const neighbor in graph) {
        if (explore(graph, neighbor, visited)) ++count;
    }
    return count;
};

const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
};
// -> 2

console.log(connectedComponentCount(graph, 0));
