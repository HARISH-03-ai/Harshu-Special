/*let a = document.querySelector(".box1");

a.addEventListener("click",()=>{
  let b = Math.random();
  
  if(b < 0.5){
  alert("Congratulations you won the gift");
}
else{
  alert("Congratulations you won the 👍🏼 Thenga")
}
})*/

 // Step 1: Randomly assign gift to one of the boxes
  const result = ["thenga", "thenga", "gift"];
  result.sort(() => Math.random() - 0.5); // shuffle the array

  // Step 2: Add click event to each box
  for (let i = 0; i < 3; i++) {
    const box = document.getElementById(`box${i}`);
    box.addEventListener("click", () => {
      if (result[i] === "gift") {
        alert("Congratulations, My Dear Behna  you won the gift! 🎁");
      } else {
        alert("Congratulations, My Dear Behna You got the Thenga! 👍🏼");
      }
    });
  }