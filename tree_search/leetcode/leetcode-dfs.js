/* https://leetcode.com/articles/find-duplicate/

Complexity Analysis

Time complexity : O(n*x)O(n∗x). nn strings of average length xx is parsed.

Space complexity : O(n*x)O(n∗x). mapmap and resres size grows upto n*xn∗x.
*/

let input = [
  "root/a 1.txt(abcd) 2.txt(efgh)",
  "root/c 3.txt(abcd)",
  "root/c/d 4.txt(efgh)",
  "root 4.txt(efgh)"
];

var findDuplicate = function(paths) {
  let contents = new Map();

  for(let folder of paths) {
    let files = folder.split(' '),
        rootFolder = files[0],
        textFiles = files.slice(1);

    textFiles.forEach(file => {
      let content = file.match(/(?!.+\()((?!\()(.+)(?=\)))/)[0];
      let filename = file.match(/^.+(?=\(.+\))/)[0];

      if(!contents.has(content)) {
        contents.set(content, []);
      }

      contents.get(content).push(`${rootFolder}/${filename}`);
    });
  }

  return Array.from(contents.values()).filter(matches => matches.length
                                              > 1);
};

console.log(findDuplicate(input));