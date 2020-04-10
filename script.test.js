<<<<<<< HEAD
// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toBe(usernames)
   });
=======

const { wordList, wordpicker, guessLetter } = require('./script');

/*
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
*/

// Functionaliteit 1: starten van de game d.m.v. het kiezen van het woord 

test('Is a word from wordList-array selected?', () => {
   expect(wordpicker).toContain(wordList[wordList.length]);
   //expect(wordpicker).not.toContain('framboos');

});

// Functionaliteit 2: checken of een letter voorkomt in het woord 

test('Does word contain the letter?', () => {
    
   // expect(guessLetter).toBeFalsy();
    expect(guessLetter).toBeTruthy();

     
    });

    // Functionaliteit 3: updaten van het aantal pogingen van de gebruiker 



>>>>>>> 2418911a17a9ae736d0eaa3bd73171055aa838c8
