function lonelyinteger(a) {
  let count = {};
  let lonely = null;
  a.forEach((i) => {
    if (count[i]) count[i] = count[i] + 1;
    else count[i] = 1;
  });

  for (let [name, value] of Object.entries(count)) {
    if (value === 1) {
      lonely = name;
      break;
    }
  }

  return lonely;
}


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/**
 * 
 Given an array of integers, where all elements but one occur twice, find the unique element.

Example

The unique element is .

Function Description

Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):

int a[n]: an array of integers
Returns

int: the element that occurs only once
Input Format

The first line contains a single integer, , the number of integers in the array.
The second line contains  space-separated integers that describe the values in .

Constraints

It is guaranteed that  is an odd number and that there is one unique element.
, where .
*/