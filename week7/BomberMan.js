//  When we detonate array again and again we will see there a pattern of same repeating arrays for example
//  i) 3rd second will be matched with 7th and then 11 and so on ... with difference of 4 seconds.. 3->7->11..
//  ii) 5th second will be matched with 9th and then 13th and so on.. with difference of 4 seconds.. 5->9->13..
//  3->5->7->9->11->13...
//  we can see we have to apply detonation only one time or 2 times... so we will take 2nd series to determine if 2 passes
//  of detornation or 1 as we will divide time with 4 and we will get reminder of 1 so 2 passes of detonation else 1 time detonation
function bomberMan(s, grid) {
  if (s === 1) return grid;

  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split("");
  }

  let detonation = false;
  if (s % 2 !== 0) {
    detonation = true;
    if (s % 4 === 1) {
      grid = detonationPass(detonationPass(grid));
    } else {
      grid = detonationPass(grid);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "t" || grid[i][j] === "x" || detonation === false) {
        grid[i][j] = "O";
      }
    }
  }
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].join("");
  }
  return grid;
}

function detonationPass(grid) {
  for (let t = 1; t <= 2; t++) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (t === 1 && grid[i][j] === "O") {
          grid[i][j] = "x";
          if (grid[i + 1] && grid[i + 1][j] !== "O") {
            grid[i + 1][j] = "t";
          }
          if (grid[i - 1]) {
            grid[i - 1][j] = "t";
          }
          if (grid[i][j + 1] && grid[i][j + 1] !== "O") {
            grid[i][j + 1] = "t";
          }
          if (grid[i][j - 1]) {
            grid[i][j - 1] = "t";
          }
        }
        if (t === 2) {
          if (grid[i][j] === "t" || grid[i][j] === "x") {
            grid[i][j] = ".";
          } else {
            grid[i][j] = "O";
          }
        }
      }
    }
  }
  return grid;
}
