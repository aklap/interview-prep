# Binary Tree

Binary tree: a tree where each node has only max of 2 children nodes.

Binary _search_ tree: _is not_ the same as a binary tree. It is a binary tree with an additional condition:

> **all left descendents <= node's value < all right descendents**

## Tree Terminology

**Balanced tree**: Has nothing to do with num of nodes, but has to do with time complexity of either inserting or finding a node in a tree, sp. `O log(n)`

**Complete tree**: Tree is filled with nodes from left to right. There are no nodes that have a right child node and no left child node.

**Full tree**: No node has 1 child, all nodes have either 0 or 2 children nodes

**Perfect binary tree**: both full and complete. No nodes have 1 child node.

Examples: Ternary tree, 10-ary tree, etc...

**Leaf node** refers to a node that is a terminal node, ie, no children node.

## Types of Tree Search: DFS (Depth First Search)

**DFS (Depth First Search)**: visit each branch left to right (root to leaf node of each branch)

- Prefer DFS if we want to visit every node in the tree/graph

Types of DFS: (All are in O(n) bc they visit each node once)
- Inorder traversal (left-root-right)
- Preorder traversal (root-left-right) 'down the tree from roo to terminal/leaf node'
- Postorder traversal (left-right-root) 'up the tree from terminal/leaf node'

- Can be recursive

## Types of Tree Search: BFS (Breadth First Search)

**BFS (Breadth First Search)**: visit each neighbor in a level before descending to next level.

- BFS is best if we just want to find the shortest path or any path (satisfy a condition)

- Not recursive
