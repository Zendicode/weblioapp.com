const supportForm = document.getElementById("supportForm");
const formNote = document.getElementById("formNote");
const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (supportForm) {
  supportForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!supportForm.reportValidity()) {
      return;
    }

    const name = supportForm.name.value.trim();
    const email = supportForm.email.value.trim();
    const message = supportForm.message.value.trim();

    const subject = encodeURIComponent("Support Request from WeblioApp Site");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@weblioapp.com?subject=${subject}&body=${body}`;
    formNote.textContent = "Opening your email app with a prefilled support message.";
  });
}