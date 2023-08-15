function processData(input) {
  [, ...input] = input.split("\n");
  let s = "";
  stack = [];
  for (let i = 0; i < input.length; i++) {
    let [op, data] = input[i].split(" ");
    op = parseInt(op);
    switch (op) {
      case 1:
        {
          s = s.concat(data);
          stack.push([op, data.length]);
        }
        break;
      case 2:
        {
          let d = s.substr(s.length - parseInt(data));
          s = s.slice(0, s.length - parseInt(data));
          stack.push([op, d]);
        }
        break;
      case 3:
        {
          console.log(s[parseInt(data) - 1]);
        }
        break;
      case 4:
        {
          let [op, data] = stack.pop();
          switch (op) {
            case 1:
              {
                s = s.slice(0, s.length - parseInt(data));
              }
              break;
            case 2:
              {
                s = s.concat(data);
              }
              break;
          }
        }
        break;
    }
  }
}
