function countLetterA() {

  let sentence = document.getElementById("sentence").value;


  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i).toLowerCase() == "a") {
      count++;
    }
  }


  document.getElementById("result").innerHTML = "La letra A aparece " + count + " veces.";
}
