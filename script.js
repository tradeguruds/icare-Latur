// ===========================
// tradeguruDS - script.js
// ===========================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------
    // Theme Toggle
    // -----------------------
    const root = document.documentElement;
    const toggle = document.querySelector("[data-theme-toggle]");

    let savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {
        savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    root.setAttribute("data-theme", savedTheme);

    if (toggle) {
        toggle.addEventListener("click", () => {
            const newTheme =
                root.getAttribute("data-theme") === "dark"
                    ? "light"
                    : "dark";

            root.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        });
    }

    // -----------------------
    // Smooth Navigation
    // -----------------------

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

    // -----------------------
    // Contact Form
    // -----------------------

    const form = document.querySelector("form");

    if (form) {

        const button = form.querySelector("button");

        button.addEventListener("click", sendWhatsApp);

    }

});


// ===========================
// WhatsApp Function
// ===========================

function sendWhatsApp() {

    const name =
        document.querySelector('input[type="text"]').value.trim();

    const phone =
        document.querySelectorAll('input[type="text"]')[1].value.trim();

    const batch =
        document.querySelector("select").value;

    const message =
        document.querySelector("textarea").value.trim();

    if (!name || !phone) {

        alert("Please enter your Name and Mobile Number.");

        return;

    }

    const whatsappNumber = "91XXXXXXXXXX"; // Replace with your number

    const text =
`📚 New Trading Class Enquiry

👤 Name : ${name}

📱 Mobile : ${phone}

🎯 Batch : ${batch}

📝 Message :
${message}`;

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

}


// ===========================
// Fade Animation
// ===========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".card,.pricing-card,.testimonial,.contact-card,.stat-card").forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(30px)";
    el.style.transition="all .6s ease";

    observer.observe(el);

});


// ===========================
// Header Shadow
// ===========================

window.addEventListener("scroll",()=>{

    const header=document.querySelector(".site-header");

    if(window.scrollY>50){

        header.style.boxShadow="0 8px 20px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow="none";

    }

});


// ===========================
// Current Year
// ===========================

const footer=document.querySelector(".site-footer");

if(footer){

    footer.innerHTML=
    footer.innerHTML.replace("2026",new Date().getFullYear());

}
