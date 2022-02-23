class Node {
    constructor(value) {
        this.node = value;
        this.left = null;
        this.right = null;
    }
}

function dfsRecursive(root) {
    if (root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.node;
    return (
        root.node + Math.max(dfsRecursive(root.left), dfsRecursive(root.right))
    );
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(21);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log(a);
console.log(dfsRecursive(a));
