// If we have a node that knows about its children:
var NodeWithChildren = class {
  constructor(myParent, val) {
    this.myParent = myParent;
    this.val = val;
    if (myParent !== null) {
      // push this node into parent node's children collection
      this.myParent.children.push(this);
    }
    this.children = [];
    // add a flag to prevent infinite loop
    this.visited = false;
  }
};

// Our tree:
//       a
//     /   \
//    l     t
//   / \   / \
//  e   r e   d

// we can build the same tree as above:
var a = new NodeWithChildren(null, 'a');
var al = new NodeWithChildren(a, 'l');
var at = new NodeWithChildren(a, 't');
var ale = new NodeWithChildren(al, 'e');
var alr = new NodeWithChildren(al, 'r');
var ate = new NodeWithChildren(at, 'e');
var atd = new NodeWithChildren(at, 'd');

// non - recursive implementation: https://gist.github.com/DmitrySoshnikov/63f9acfac4651da5d21f

let stack =[];
let result = [];

function dfsWalk(node) {
  stack.push(node); // seed with the root node before running function

  while(stack.length) {
    curr = stack[stack.length -  1]; // Don't pop, just reference the top node

    if(!curr.visited) {
      curr.visited = true;
      result.push(curr.val);
    }

    for(let n of curr.children) {
      if(!n.visited) {
        stack.push(n);
        return dfsWalk(n);
      }
    }

    stack.pop(); // All children nodes visited, move to next parent node.
  }

  return result.join('');
}

function dfsFind(node, target) {
  stack.push(node); // begin iterating

  while(stack.length) {
    curr = stack[stack.length - 1]; // get the top of the stack

    // Check if we found our target value
    if(!curr.visited) {
      if(target && curr.val === target) return `Target found! ${target} in tree`;
      curr.visited = true;
    }

    for(let n of curr.children) {
      if(!n.visited) {
        stack.push(n);
        return dfsFind(n, target);
      }
    }
    stack.pop();
  }
  // If target is never found
  return null;
}

// console.log(`DFS works: ${dfsWalk(a) === 'alerted'}`);
// console.log(dfsWalk(a));
console.log(dfsFind(a, 'd'));
