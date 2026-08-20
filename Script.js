/* =========================
   MENU MOBILE
========================= */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

});


/* Fecha o menu quando clicar em um link */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/* =========================
   FAQ
========================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item = question.parentElement;

        const answer =
            item.querySelector(".faq-answer");


        /* Fecha outros */

        document
            .querySelectorAll(".faq-item")
            .forEach(otherItem => {

                if (otherItem !== item) {

                    otherItem.classList.remove("active");

                    otherItem
                        .querySelector(".faq-answer")
                        .style.maxHeight = null;

                }

            });


        /* Abre ou fecha atual */

        item.classList.toggle("active");

        if (item.classList.contains("active")) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});


/* =========================
   FORMULÁRIO
========================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value.trim();


    if (!name || !phone || !subject || !message) {

        alert("Por favor, preencha todos os campos.");

        return;

    }


    /*
       SUBSTITUA ESTE NÚMERO PELO WHATSAPP REAL.

       Formato:

       55 + DDD + número

       Exemplo fictício:
       +55 79 99832-9614
    */

    const lawyerWhatsApp =
        "+55 79 99832-9614";


    const whatsappMessage =
        `Olá, Dra. Vitória Cardoso.%0A%0A` +
        `Meu nome é ${encodeURIComponent(name)}.%0A` +
        `Meu WhatsApp: ${encodeURIComponent(phone)}.%0A` +
        `Assunto: ${encodeURIComponent(subject)}.%0A%0A` +
        `${encodeURIComponent(message)}`;


    const whatsappURL =
        `https://wa.me/${lawyerWhatsApp}?text=${whatsappMessage}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* =========================
   ANO AUTOMÁTICO
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
