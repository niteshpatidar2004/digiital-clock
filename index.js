const hour1 = document.getElementById("hours");
const minute1 = document.getElementById("minutes");
const second1 = document.getElementById("seconds");
const ampmE = document.getElementById("ampm");
function updateDate() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12) {
        h = h - 12;
        ampm = "PM"
    }
    h =h < 10 ? "0" +h : h;
    m= m <10 ? "0" +m : m;
    s= s <10 ? "0" +s : s;
    
    hour1.innerText = h;
    minute1.innerText =m;
    second1.innerText = s;
    ampmE.innerText = ampm;
}


updateDate()
setInterval(() => {
    updateDate();
}, 1000)