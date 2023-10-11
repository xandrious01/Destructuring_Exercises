new Set([1, 1, 2, 2, 3, 4])

returns:

set[1, 2, 3, 4]

//////////

[...new Set("referee")].join("")

returns:

'ref'

m {
    Array(3) => true,
    Array(3) => false
}

//////////////////

const hasDuplicate = (arr) => {
    const arrSet = new Set(arr);
    return arr.length > arrSet.size ? true : false;
}

////////////////////////////

const vowelCount = (str) => {
    const strMap = new Map();
    const vowels = 'aeiou';
    let strVowels = Array.from(str.toLowerCase()).filter(char => vowels.includes(char));
    strVowels.forEach(vow => {
if (strMap.has(vow) === false) {
  strMap.set(vow, 1)
} else {
  let count = strMap.get(vow);
  strMap.set(vow, count+=1)
}
      });
    return strMap;
}

