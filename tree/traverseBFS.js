class Node {
    constructor(value) {
        this.node = value;
        this.left = null;
        this.right = null;
    }
}

function bfsQueue(root) {
    if (root === null) return [];
    const stack = [root];
    const result = [];

    while (stack.length) {
        const current = stack.shift();
        result.push(current.node);
        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
    }
    return result;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log(a);
console.log(bfsQueue(a));
