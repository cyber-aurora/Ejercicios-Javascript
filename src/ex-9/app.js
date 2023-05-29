function countVowels() {

  let sentence = document.getElementById("sentence").value;
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;


  for (let i = 0; i < sentence.length; i++) {
    let char = sentence.charAt(i).toLowerCase();
    
    
    if (vowels.includes(char)) {
      count++;
    }
  }


  let result = "La oración contiene " + count + " vocales.";
  document.getElementById("result").innerHTML = result;
}
