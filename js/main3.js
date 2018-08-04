//Can you find the needle in the haystack?

//Write a function findNeedle() that takes an array full of junk but containing one "needle"

//After your function finds the needle it should return a message (as a string) that says:

//"found the needle at position " plus the index it found the needle, so...

//findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// function findNeedle(haystack) {
//   haystack.forEach(function(i) {
//     if (i === 'needle') {
//       return `found the needle at position ${i.indexOf}`
//     }
//   })
// }

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      let needleIndex = haystack.indexOf('needle');
      return
      'found the needle at position ' + needleIndex;
      // console.log('found the needle at position ' + haystack.indexOf('needle'));
    }
  }
}

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']);
