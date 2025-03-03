let words = [
    "apple", "banana", "grape", "orange", "peach", "chair", "table", "house", "river", "ocean",
    "cloud", "happy", "sunny", "storm", "light", "bread", "pizza", "pencil", "paper", "phone",
    "music", "dance", "smile", "laugh", "sleep", "drink", "train", "beach", "flower", "tiger"
  ];
  


  let guessWord = []

  let userGuess = ''

  

  let randWord = Math.round(Math.random() * words.length)
  guessWord.push(words[randWord])

  for (let i = 0; i < guessWord[0].length; i++) {
    
    userGuess += '-'
    
    
  }

  let inp = document.getElementById('inp')
  let para = document.getElementsByClassName('para')
  let getlife = document.getElementsByClassName('life')
  let btn = document.getElementsByClassName('btn')
  
  para[0].innerText = userGuess
  
  let life = 6  
  
  btn[0].addEventListener('click', function () {
      
      
      let found = false
      
    let userGuessToArray = userGuess.split("")
    
    for (let i = 0; i < guessWord[0].length; i++) {
      
      
      if (guessWord[0][i] == inp.value) {
        
        
            found = true
            userGuessToArray[i] = inp.value
            para[0].innerText = userGuessToArray
            
            
            
          }
          
          
        }
        if(!found){ 

          life -= 1
          getlife[0].innerText = `Life ${life}`
          
          
        }

    inp.value = ''
    userGuess = userGuessToArray.join("")

    if (guessWord[0] == userGuess) {
        
        para[0].innerText = "You win!"
    }else if (life == 0) {
        
        para[0].innerText = "Game over!"
        
    }
    
    console.log(guessWord[0]);
    console.log(userGuess);
    
    
    
    
  })
//   console.log(userGuess[0]);
  
  
