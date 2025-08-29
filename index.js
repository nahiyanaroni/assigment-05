let callList = [];
const historyContainer = document.getElementById("callHistory");

const RedHart = document.getElementById("redHart");
const harts = document.querySelectorAll(".hartAction");
harts.forEach(hart => {
    hart.addEventListener("click", function () {
        RedHart.innerHTML = Number(RedHart.innerHTML) + 1;
    });
});

const Coin = document.getElementById("coin");

const call = document.querySelectorAll(".callAction")
call.forEach(btn => {
    btn.addEventListener("click", () => {
        const title = btn.dataset.title;
        const number = btn.dataset.number;



        if (Number(Coin.innerHTML) >= 20) {
            alert(`📞Calling ${title} ${number}...`);
            Coin.innerHTML = Number(Coin.innerHTML) - 20;
            callList.push({ title, number, time: new Date().toLocaleTimeString() });

            addCallToHistory(title, number);
        }
        else {
            alert("🚫You haven't 20 coin  so, you can't call please try again")
        }

    });
});

function addCallToHistory(title, number) {
    const time = new Date().toLocaleTimeString();

    const item = document.createElement("div");
    item.className =
        "flex justify-between items-center bg-slate-100 p-2 rounded-2xl";

    item.innerHTML = `
    <div>
      <h1>${title}</h1>
      <p>${number}</p>
    </div>
    <div>
      <p>${time}</p>
    </div>
  `;

    historyContainer.prepend(item);
}


document.querySelector(".right-div button").addEventListener("click", () => {
    historyContainer.innerHTML = "";
    callList = [];
});

const countCopy = document.getElementById("copyButton");
const copyButton = document.querySelectorAll(".copy_button");
copyButton.forEach(copy => {
    copy.addEventListener("click", function () {
        const number = copy.dataset.number;

        alert(`this number is copied ${number}`)
        navigator.clipboard.writeText(number)

        countCopy.innerHTML = Number(countCopy.innerHTML) + 1;


    });
});

