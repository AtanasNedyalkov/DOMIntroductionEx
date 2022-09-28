function solve() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let arrayText = input.split(".").filter(x=>x.length>0);
  output.innerHTML = "";
  for(let i = 0; i <arrayText.length; i+=3){
    let res = [];
    for(let x = 0; x < 3; x++)
    {
      if(arrayText[i+x])
      {
        res.push(arrayText[i+x])
      }
    }
    let result = res.join(". ")+ ".";
    output.innerHTML += `<p>${result}</p>`;
  }
}