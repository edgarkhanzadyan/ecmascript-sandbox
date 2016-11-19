/**
* Problem instructions:
* Relevant resources:
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
* - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
*/
let arr = ['Edgar', 'is', 'name', 'my'];

function reverseArr(array) {
  let newArr = 123;
  newArr[array.length-1];
  for(const i = 0; i < array.length; i++){
    newArr[i] = array[array.length -1 - i];
  }
  return newArr;
}
console.log(reverseArr(array));
/**
* Fix the errors in the code so we have the output in the console. Try to determine output before running the code.
* Solution -
bGluZSAxMCA6IGxldCBuZXdBcnIgc2hvdWxkIGJlIGFuIGFycmF5LiBCdXQgaW4gdGhpcyB0YXNr
IGl0IGlzIGluaXRpYWxpemVkIGFzIGEgbnVtYmVyKDEyMyk7ClJpZ2h0IGFuc3dlciAobmV3QXJy
ID0gW10pOwpsaW5lIDEyIDogY29uc3QgaSBpcyB3cm9uZyBiZWNhdXNlIHdlIGFyZSBnb2luZyB0
byBjaGFuZ2UgaSBmb3Igb3VyIGxvb3A7ClJpZ2h0IGFuc3dlciAobGV0IGkgPSAwOykKbGluZSAx
NyA6IGluIHJldmVyc2VBcnIgd2UgaGF2ZSB0byBwYXNzIGFuIGFyZ3VtZW50IGNhbGxlZCAoYXJy
KSwgd2hpY2ggd2UgaW5pdGlhbGl6ZWQgaW4gbGluZSA3OwpJbiB0aGlzIGV4YW1wbGUgd2UgaGF2
ZSBhcyBhbiBhcmd1bWVudCBmb3IgY2FsbGluZyB0aGUgZnVuY3Rpb24gYSBMT0NBTCBhcmd1bWVu
dCBvZiB0aGF0IGZ1bmN0aW9uLCB3aGF0IGlzIHdyb25nOwpSaWdodCBhbnN3ZXI6KGNvbnNvbGUu
bG9nKHJldmVyc2VBcnIoYXJyKSkpOwo=
GoodLuck*/
