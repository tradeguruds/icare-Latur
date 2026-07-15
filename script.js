// ===============================
// I Care Latur - JavaScript
// ===============================

// WhatsApp Booking

function sendWhatsApp() {

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const device = document.getElementById("device").value;
const model = document.getElementById("model").value.trim();
const problem = document.getElementById("problem").value.trim();

if (name === "") {
    alert("Please enter your name.");
    return;
}

if (phone === "") {
    alert("Please enter your mobile number.");
    return;
}

if (!/^[6-9]\d{9}$/.test(phone)) {
    alert("Please enter a valid 10-digit Indian mobile number.");
    return;
}

const bookingId = "ICL" + Date.now().toString().slice(-6);

const message =
`*I Care Latur - Repair Slot Booking*

🆔 Booking ID: ${bookingId}

👤 Customer Name: ${name}

📞 Mobile: ${phone}

📱 Device: ${device}

📦 Model: ${model}

🛠 Problem:
${problem}

📍 I Care Latur
In Front of D-Mart, Latur

Thank You!`;

const url =
"https://wa.me/918446722671?text=" +
encodeURIComponent(message);

window.open(url, "_blank");

}

// ===============================
// Sticky Navbar Shadow
// ===============================

window.addEventListener("scroll", function () {

const navbar = document.querySelector(".navbar");

if (window.scrollY > 40) {
navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,.25)";
}
else{
navbar.style.boxShadow = "none";
}

});

// ===============================
// Fade-in Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".service-card,.gallery img,.booking-box").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="all .8s ease";

observer.observe(el);

});

// ===============================
// Current Year in Footer
// ===============================

const footer = document.querySelector("footer p");

if (footer) {

footer.innerHTML =
`© ${new Date().getFullYear()} I Care Latur | Apple Device Repair Specialist`;

}

// ===============================
// Auto Scroll to Booking
// ===============================

const bookButtons = document.querySelectorAll('a[href="#booking"]');

bookButtons.forEach(btn => {

btn.addEventListener("click", function(e){

e.preventDefault();

document.getElementById("booking").scrollIntoView({

behavior:"smooth"

});

});

});

// ===============================
// Success Message
// ===============================

document.querySelector("button")?.addEventListener("click", function(){

setTimeout(function(){

alert("Thank you! Your booking details will open in WhatsApp.");

},300);

});
