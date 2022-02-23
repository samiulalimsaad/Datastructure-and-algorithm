const depthFirstSearchStack = (graph, node) => {
    const stack = [node];

    while (stack.length) {
        const crr = stack.pop();
        console.log(crr);
        for (const child of graph[crr]) {
            stack.push(child);
        }
    }
};
const depthFirstSearchRecursive = (graph, node) => {
    console.log(node);
    for (const child of graph[node]) {
        depthFirstSearchRecursive(graph, child);
    }
};

const breathFirstSearchQueue = (graph, node) => {
    const queue = [node];

    while (queue.length) {
        const crr = queue.shift();
        console.log(crr);
        for (const child of graph[crr]) {
            queue.push(child);
        }
    }
};

// const breathFirstSearchRecursive = (graph, node) => {
//     console.log(node);
//     for (const child of graph[node]) {
//         breathFirstSearchRecursive(graph, child);
//     }
// };

const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
};

console.log(graph);

console.log("dfs using stack");
depthFirstSearchStack(graph, "a");
console.log();
console.log();
console.log("dfs using recursion");
depthFirstSearchRecursive(graph, "a");
console.log();
console.log();
console.log("dfs using queue");
breathFirstSearchQueue(graph, "a");
// console.log();
// console.log();
// console.log("bfs using recursion");
// breathFirstSearchRecursive(graph, "a");
