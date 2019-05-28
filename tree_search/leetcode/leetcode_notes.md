
# Follow-up beyond contest:

1. Imagine you are given a real file system, how will you search files? DFS or BFS?

DFS is better than BFS since we need to search every file in the system. BFS is generally better when we don't need to go deeply into a tree or search every node since DFS would cause us to search nodes and paths we don't need to search. 

2. If the file content is very large (GB level), how will you modify your solution?


3. If you can only read the file by 1kb each time, how will you modify your solution?
This is pretty similar in spirit to the question above...

4. What is the time complexity of your modified solution? What is the most time-consuming part and memory consuming part of it? How to optimize?

5. How to make sure the duplicated files you find are not false positive?
Not sure what is meant by 'false positive'...like a symlink? Some kind of comparison is in order, maybe by an attribute like created_at, permissions, type of file, etc.