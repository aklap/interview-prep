// This was a coding challenge from Trello

var Node = class {
  constructor(myParent, val) {
    this.myParent = myParent;
    this.val = val;
  }
};

// Post-order traversal; base case is node.myParent === null
var walkUp = function(node) {
  // log each node's val property as we visit it
  console.log(node.val);
  // continue recursive calls until we reach root node
  if(node.myParent !== null) {
    walkUp(node.myParent);
  }
};

// Our tree:
//       a
//     /   \
//    l     t
//   / \   / \
//  e   r e   d
//
var a = new Node(null, 'a');
var al = new Node(a, 'l');
var at = new Node(a, 't');
var ale = new Node(al, 'e');
var alr = new Node(al, 'r');
var ate = new Node(at, 'e');
var atd = new Node(at, 'd');

console.log('PART 1: START');
walkUp(ate);
console.log('PART 1: END');

// If we have a node that knows about its children:
var NodeWithChildren = class {
  constructor(myParent, val) {
    this.myParent = myParent;
    this.val = val;
    if(myParent !== null) {
      this.myParent.children.push(this);
    }
    this.children = [];
  }
};

// we can build the same tree as above:
var a = new NodeWithChildren(null, 'a');
var al = new NodeWithChildren(a, 'l');
var at = new NodeWithChildren(a, 't');
var ale = new NodeWithChildren(al, 'e');
var alr = new NodeWithChildren(al, 'r');
var ate = new NodeWithChildren(at, 'e');
var atd = new NodeWithChildren(at, 'd');

console.log('PART 2: START');
// Please write a function that walks a tree breadth first.

// Pre-order traversal: ends with terminal nodes.
var breadthFirst = function(node) {
  let queue = [],
    msg = '';

  // our root node, marked as 'seen' and pushed into queue to start iterating over nodes
  node.seen = true;
  queue.push(node);

  while(queue.length > 0) {
    let curr = queue.shift();
    // The instructions want this format, break on new line after ea. letter:
    console.log(curr.val);
    // concat string to copy/paste the url into browser later :)
    msg += curr.val;
    // map over each child node; callback function adds newly visited nodes to our queue.
    curr.children.map(child => {
      if(!child.seen) {
        child.seen = true;
        queue.push(child);
      }
    });
  }
  // tell us what the link is!
  console.log(`The link is: ${msg}`);
};

var tnqp = new NodeWithChildren(null, 'h');
var plsh = new NodeWithChildren(tnqp, 'h');
var ljtv = new NodeWithChildren(plsh, 't');
var fixg = new NodeWithChildren(ljtv, 't');
var ecwx = new NodeWithChildren(fixg, 'p');
var vneg = new NodeWithChildren(fixg, 's');
var bvzy = new NodeWithChildren(vneg, 'l');
var dagw = new NodeWithChildren(bvzy, 'm');
var iork = new NodeWithChildren(dagw, '/');
var mkdz = new NodeWithChildren(dagw, 't');
var nsbw = new NodeWithChildren(tnqp, 'u');
var fklh = new NodeWithChildren(dagw, 'a');
var tgkh = new NodeWithChildren(dagw, 'c');
var ozme = new NodeWithChildren(nsbw, 'y');
var ptym = new NodeWithChildren(dagw, 'o');
var ltxi = new NodeWithChildren(ecwx, 't');
var ndbl = new NodeWithChildren(ozme, 'i');
var uamr = new NodeWithChildren(ecwx, 'r');
var zoub = new NodeWithChildren(uamr, '.');
var lsdj = new NodeWithChildren(uamr, 'c');
var dubz = new NodeWithChildren(ecwx, 'e');
var crwf = new NodeWithChildren(dubz, 'o');
var nspn = new NodeWithChildren(dagw, '-');
var kyyr = new NodeWithChildren(dagw, 'g');
var xzmv = new NodeWithChildren(ozme, 'i');
var intv = new NodeWithChildren(kyyr, 'a');
var hcjg = new NodeWithChildren(ozme, 'l');
var sykk = new NodeWithChildren(intv, 'm');
var vesu = new NodeWithChildren(hcjg, 's');
var cwfu = new NodeWithChildren(sykk, 'e');
var zbuo = new NodeWithChildren(vneg, 'l');
var yrkc = new NodeWithChildren(hcjg, ':');
var mwwv = new NodeWithChildren(vneg, 'o');
var bazz = new NodeWithChildren(fixg, ':');
var sggl = new NodeWithChildren(fixg, '/');
var aacq = new NodeWithChildren(fixg, '/');
// If you have a correct implementation of breadthFirst, this should be a url
// that takes you to a bit of fun.
breadthFirst(plsh);
  
console.log('PART 2: END');
console.log("That's all, thanks!");

