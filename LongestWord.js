function longestWord(str){

  let longest = ''
  
  let arr = str.split(' ')
  for(i=0;i < arr.length; i++){
    let word = arr[i]
    if(word.length < longest.length){
      longest = word
    }
  }

  return longest
  
}

longestWord("What is the longest word in this string?")