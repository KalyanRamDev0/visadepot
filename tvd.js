


document.addEventListener("DOMContentLoaded", () => {
    const dropdownLinks = document.querySelectorAll(".dropdown-menu a");
    const formContainer = document.getElementById("form-container");
    const form = document.getElementById("placement-form");

    dropdownLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const section = e.target.dataset.form;
            showForm(section);
        });
    });

    function showForm(section) {
        formContainer.classList.remove("hidden");
        form.reset();
        const sectionSelect = form.querySelector("#section");
        sectionSelect.value = ""; 
        form.querySelector("h2").textContent = `Placement Form`;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const selectedSection = form.querySelector("#section").value;
        if (!selectedSection) {
            alert("Please select a section!");
            return;
        }
        alert(`Form submitted for ${selectedSection}!`);
        formContainer.classList.add("hidden");
    });
});
