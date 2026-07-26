// ==============================
// tradeguruDS Trading Classes
// script.js
// ==============================

// ------------------------------
// Dark / Light Theme
// ------------------------------

const root = document.documentElement;
const themeBtn = document.querySelector("[data-theme-toggle]");

let savedTheme = localStorage.getItem("theme");

if (!savedTheme) {
    savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

root.setAttribute("data-theme", savedTheme);

if (themeBtn) {

    themeBtn.textContent =
        savedTheme === "dark" ? "☀️" : "🌙";

    themeBtn.addEventListener("click", () => {

        const current = root.getAttribute("data-theme");

        const next =
            current === "dark"
                ? "light"
                : "dark";

        root.setAttribute("data-theme", next);

        localStorage.setItem("theme", next);

        themeBtn.textContent =
            next === "dark"
                ? "☀️"
                : "🌙";

    });

}

// ------------------------------
// Smooth Scroll
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ------------------------------
// Active Navigation
// ------------------------------

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ------------------------------
// Sticky Header Shadow
// ------------------------------

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ------------------------------
// Scroll To Top Button
// ------------------------------

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style, {

    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background: "#0a7c74",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    display: "none",
    zIndex: "999"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ------------------------------
// Contact Form Validation
// ------------------------------

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();

        const phone = form.querySelectorAll('input')[1].value.trim();

        const message = form.querySelector("textarea").value.trim();

        if (name.length < 3) {

            alert("Please enter your name.");

            return;

        }

        if (!/^[0-9]{10}$/.test(phone)) {

            alert("Enter a valid 10-digit mobile number.");

            return;

        }

        alert("Thank you! Your enquiry has been received.");

        form.reset();

    });

}

// ------------------------------
// WhatsApp Enquiry
// ------------------------------

<script>
function sendWhatsApp() {

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const batch = document.getElementById("batch").value;
    const message = document.getElementById("message").value;

    const text =
`📚 *New Trading Class Enquiry*

👤 Name: ${name}
📱 Phone: ${phone}
🎯 Batch: ${batch}

📝 Message:
${message}`;

    const whatsappNumber = "919876543210"; // Replace with your WhatsApp number

    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank"
    );
}
</script>
    });

}

// ------------------------------
// Copyright Year
// ------------------------------

const footer = document.querySelector(".site-footer");

if (footer) {

    footer.innerHTML = footer.innerHTML.replace(
        "2026",
        new Date().getFullYear()
    );

}

console.log("tradeguruDS Website Loaded Successfully");
