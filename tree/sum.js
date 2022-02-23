class Node {
    constructor(value) {
        this.node = value;
        this.left = null;
        this.right = null;
    }
}

function dfsRecursive(root) {
    if (root === null) return 0;
    return root.node + dfsRecursive(root.left) + dfsRecursive(root.right);
}

function bfsQueue(root) {
    if (root === null) return [];
    const stack = [root];
    let sum = 0;

    while (stack.length) {
        const current = stack.shift();
        sum += current.node;
        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
    }
    return sum;
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log(a);
console.log(dfsRecursive(a));
console.log(bfsQueue(a));
