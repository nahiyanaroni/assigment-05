
const RedHart = document.getElementById("redHart");
console.log(RedHart.innerHTML);

const harts = document.querySelectorAll(".hartAction");
harts.forEach(hart => {
  hart.addEventListener("click", function() {
    RedHart.innerHTML = Number(RedHart.innerHTML) +1;
  });
});

const Coin = document.getElementById("coin");
console.log(Coin.innerHTML);

 const call = document.querySelectorAll(".callAction")
  call.forEach(btn => {
  btn.addEventListener("click", () => {
    const title = btn.dataset.title;
    const number = btn.dataset.number;

    console.log("Title:", title);
    console.log("Number:", number);

    alert(`Title: ${title}\nNumber: ${number}`);
  });
});

