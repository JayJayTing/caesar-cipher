const encrypt = function(plaintext, key) {
  let cipheredText = '';
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let arrayPlaintext = plaintext.split('');
  for (let letter of arrayPlaintext) {
    for (let i = 0; i < 26; i ++) {
      
      if (letter === ' ') {
        cipheredText += " ";
        break;
      }
      
      
      if (letter === alphabet[i]) {
        let a = 0;
        if (i > 26 - key && key > 0) {
          a = i + key - 26;
        } else if (i < (0 +  Math.abs(key)) && key < 0) {
          
          a = i + key + 26;
          console.log(i + " in " + a);
        } else {
          a = i + key;
        }

        
        //console.log(a);
        cipheredText += alphabet[a];
        
      }
      
    }
  
  }
  //console.log(cipheredText);
  return cipheredText;
};

encrypt("b", -3);

module.exports = { encrypt };