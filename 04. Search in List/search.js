function search() {
   let textList = Array.from(document.querySelectorAll("ul li"));
   let searchTech = document.getElementById("searchText").value;
   let count = 0;
   for (let textItem of textList) {
      let text = textItem.textContent;
      if(text.includes(searchTech)){
         textItem.style.textDecoration = "underline";
         textItem.style.fontWeight = "bold";
         count++;
      }
      else{

         textItem.style.textDecoration = "none";
         textItem.style.fontWeight = "normal";
      }
   }
   document.getElementById("result").innerText = `${count} matches found`;
}
