
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
        }
        else {
            alert("🚫You haven't 20 coin  so, you can't call please try again")
        }
    });
});

