///// just take the reverse of string and find the lcs of them and the answer will be longest pelingdrom subsequence...

//// Tablucation of lcs.. (Leet Code)

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
var longestPalindromeSubseq = function (s) {
  let s2 = s.split("").reverse().join("");

  return longestCommonSubsequence(s, s2);
};

/////////////////////
////// Minimum insertions needed to make a string palingdrom... (Leet Code)

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

var minInsertions = function (s) {
  let s2 = s.split("").reverse().join("");

  return s.length - longestCommonSubsequence(s, s2);
};

/////////////////////
////// Minimum deletion for two strings to make them equal ( Leet code )
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

var minDistance = function (word1, word2) {
  return (
    word1.length + word2.length - 2 * longestCommonSubsequence(word1, word2)
  );
};
