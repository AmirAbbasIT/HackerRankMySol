//Check wheter a string contains all the alphabets 

function pangrams(s) {
  s = s
    .toLowerCase()
    .split("")
    .filter((c) => c >= "a" && c <= "z")
    .join("");
  let set = new Set([...s]);
  return Array.from(set).length === 26 ? "pangram" : "not pangram";
}