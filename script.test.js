
const { wordList, wordpicker, wordGuessed, guessLetter } = require('./script');

// Functionaliteit 1: starten van de game d.m.v. het kiezen van het woord 

test('Is a word from wordList-array selected?', () => {
   expect(wordpicker).toContain(wordList[wordList.length]);
   //expect(wordpicker).not.toContain('framboos');
});

// Functionaliteit 2: checken of een letter voorkomt in het woord 


test('Does word contain the letter?', () => {
   // expect(guessLetter).toBeFalsy();
   const input1 = "t";
   let inputs = "tovenaar";
   //expect(guessLetter()).toContain(input1);
})

  /*    
test('Does word contain letter', () => { 
   const wordGuessed = function(word, inputs) { 
   let remaining = word.filter( function (letter) { return !inputs.includes(letter) ; });  
   expect(remaining).tobeTruthy();

*/
    // Functionaliteit 3: updaten van het aantal pogingen van de gebruiker

   
    test('Update number of tries', () => {
    })

    // Functionaliteit 4: updaten van de lijst met letters die al geraden zijn 

    test('Update guessed letters', () => {
   })
   

   // Functionaliteit 5: verliezen van de game wanneer er geen pogingen meer over zijn
     

   test('Game lost', () => {
      
      inputs = ["b", "q", "e", "s", "p"];
      word = ["t", "o", "e", "t", "e", "r"];
      expect(wordGuessed(word,inputs)).toBeFalsy();
      tries = 6;
     
   })


// Functionaliteit 6: winnen van de game

   test('Game won', () => {
      const inputs = ["d", "e", "v", "e", "l", "o", "p", "e","r"];
      const inputs2 = ["d", "e", "v", "e", "l", "o", "p"]
      const word = ["d", "e", "v", "e", "l", "o", "p", "e", "r"];
      expect(wordGuessed(word,inputs)).toBeTruthy();
      expect(wordGuessed(word,inputs2)).toBeFalsy();
   })

   

