const explore = (graph, current, visited) => {
    if (visited.has(current)) return 0;

    visited.add(current);
    let size = 1;

    for (const node of graph[current]) {
        size += explore(graph, node, visited);
    }
    return size;
};

const largestComponentCount = (graph) => {
    const visited = new Set();
    let longest = 0;
    for (const node in graph) {
        const size = explore(graph, node, visited);
        if (size > longest) {
            longest = size;
        }
    }
    return longest;
};

const graph = {
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
};
// ->

console.log(largestComponentCount(graph));
