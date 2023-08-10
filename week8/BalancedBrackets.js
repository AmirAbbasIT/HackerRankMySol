function isBalanced(s) {
  let balanced = true;
  if (s.length % 2 !== 0) balanced = false;

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (["]", "}", ")"].includes(s[i])) {
      if (s[i] === "}") {
        if (stack.pop() !== "{") {
          balanced = false;
          break;
        }
      } else if (s[i] === "]") {
        if (stack.pop() !== "[") {
          balanced = false;
          break;
        }
      } else if (s[i] === ")") {
        if (stack.pop() !== "(") {
          balanced = false;
          break;
        }
      }
    } else {
      stack.push(s[i]);
    }
  }
  if (stack.length !== 0) balanced = false;

  return balanced ? "YES" : "NO";
}
