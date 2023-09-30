let S1 = "AGGTAB",
  S2 = "GXTXAYB";

function f(s1, s2, idx1, idx2) {
  if (idx1 < 0 || idx2 < 0) {
    return 0;
  }

  if (s1[idx1] === s2[idx2]) {
    return 1 + f(s1, s2, idx1 - 1, idx2 - 1);
  } else {
    return Math.max(f(s1, s2, idx1 - 1, idx2), f(s1, s2, idx1, idx2 - 1));
  }
}

function lcs(s1, s2) {
  let dp = Array.from({ length: s1.length }, () => Array(s2.length).fill(-1));
  return f(s1, s2, s1.length - 1, s2.length - 1, dp);
}

console.log("lcs=", lcs(S1, S2));

//// Memoizing
function f(s1, s2, idx1, idx2, dp) {
  if (idx1 < 0 || idx2 < 0) {
    return 0;
  }
  if (dp[idx1][idx2] !== -1) return dp[idx1][idx2];

  if (s1[idx1] === s2[idx2]) {
    return (dp[idx1][idx2] = 1 + f(s1, s2, idx1 - 1, idx2 - 1, dp));
  } else {
    return (dp[idx1][idx2] = Math.max(
      f(s1, s2, idx1 - 1, idx2, dp),
      f(s1, s2, idx1, idx2 - 1, dp)
    ));
  }
}

var longestCommonSubsequence = function (s1, s2) {
  let dp = Array.from({ length: s1.length + 1 }, () =>
    Array(s2.length + 1).fill(-1)
  );
  return f(s1, s2, s1.length - 1, s2.length - 1, dp);
};

///// Tabulization...
var longestCommonSubsequence = function (s1, s2) {
  let dp = Array.from({ length: s1.length + 1 }, () =>
    Array(s2.length + 1).fill(-1)
  );

  for (let i = 0; i <= s1.length; i++) {
    dp[i][0] = 0;
  }
  for (let i = 0; i <= s2.length; i++) {
    dp[0][i] = 0;
  }

  for (let idx1 = 1; idx1 <= s1.length; idx1++) {
    for (let idx2 = 1; idx2 <= s2.length; idx2++) {
      if (s1[idx1 - 1] === s2[idx2 - 1]) {
        dp[idx1][idx2] = 1 + dp[idx1 - 1][idx2 - 1];
      } else {
        dp[idx1][idx2] = Math.max(dp[idx1 - 1][idx2], dp[idx1][idx2 - 1]);
      }
    }
  }

  return dp[s1.length][s2.length];
};

////// TO print LCS FROM TABULATION.....

function lcs(s1, s2) {
  let dp = Array.from({ length: s1.length + 1 }, () =>
    Array(s2.length + 1).fill(-1)
  );

  for (let i = 0; i <= s1.length; i++) {
    dp[i][0] = 0;
  }
  for (let i = 0; i <= s2.length; i++) {
    dp[0][i] = 0;
  }

  for (let idx1 = 1; idx1 <= s1.length; idx1++) {
    for (let idx2 = 1; idx2 <= s2.length; idx2++) {
      if (s1[idx1 - 1] === s2[idx2 - 1]) {
        dp[idx1][idx2] = 1 + dp[idx1 - 1][idx2 - 1];
      } else {
        dp[idx1][idx2] = Math.max(dp[idx1 - 1][idx2], dp[idx1][idx2 - 1]);
      }
    }
  }
  for (let i = 0; i < dp.length; i++) {
    console.log(JSON.stringify(dp[i]), i);
  }

  let i = s1.length;
  let j = s2.length;
  let lcs = [];
  while (i > 0 && j > 0) {
    if (s1[i - 1] === s2[j - 1]) {
      lcs.unshift(s1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  console.log(lcs.join(" "));
}
