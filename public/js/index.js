(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    // Get booking page elements
    const dateInput = document.getElementById("booking-date");
    const expiryInput = document.getElementById("expiry-date");
    const bookingStepOneButton = document.getElementById("booking-step-one-button");
    const bookingStepTwoButton = document.getElementById("booking-step-two-button");
    const bookingSubmitButton = document.getElementById("booking-submit-button");
    const ticketCards = document.querySelectorAll(".booking-page-ticket-card");
    const bookingFirstStep = document.getElementById("booking-first-step");
    const bookingSecondStep = document.getElementById("booking-second-step");
    const bookingThirdStep = document.getElementById("booking-third-step");
    const firstBookingPage = document.getElementById("first-booking-page");
    const secondBookingPage = document.getElementById("second-booking-page");
    const thirdBookingPage = document.getElementById("third-booking-page");
    const firstName = document.getElementById("firstname");
    const surName = document.getElementById("surname");
    // Set booking date constraint
    if (dateInput) {
        dateInput.min = getConstraintDate("complete-date");
    }
    // Set expiry date constraint
    if (expiryInput) {
        expiryInput.min = getConstraintDate();
    }
    // Allow ticket selection and update booking summary
    ticketCards.forEach((card) => {
        const decreaseBtn = card.querySelector(".decrease-button");
        const increaseBtn = card.querySelector(".increase-button");
        const quantityDisplay = card.querySelector(".ticket-quantity");
        let quantity = 0;
        increaseBtn.addEventListener("click", () => {
            quantity++;
            quantityDisplay.textContent = quantity.toString();
            updateBookingSummary();
        });
        decreaseBtn.addEventListener("click", () => {
            if (quantity > 0) {
                quantity--;
                quantityDisplay.textContent = quantity.toString();
                updateBookingSummary();
            }
        });
    });
    // Switch to booking step 2 on button click
    bookingStepOneButton.addEventListener("click", () => {
        if (firstBookingPage && secondBookingPage && bookingStepOneButton && bookingFirstStep && bookingSecondStep &&
            dateInput.value) {
            bookingFirstStep.classList.remove("active-step");
            bookingFirstStep.classList.add("inactive-step");
            bookingSecondStep.classList.remove("inactive-step");
            bookingSecondStep.classList.add("active-step");
            firstBookingPage.classList.toggle("hidden");
            secondBookingPage.classList.toggle("hidden");
        }
    });
    // Switch to booking step 3 on button click
    bookingStepTwoButton.addEventListener("click", () => {
        if (secondBookingPage && thirdBookingPage && bookingStepTwoButton && bookingSecondStep
            && bookingThirdStep && firstName && surName && isValidClientName(firstName.value)
            && isValidClientName(surName.value)) {
            bookingSecondStep.classList.remove("active-step");
            bookingSecondStep.classList.add("inactive-step");
            bookingThirdStep.classList.remove("inactive-step");
            bookingThirdStep.classList.add("active-step");
            secondBookingPage.classList.toggle("hidden");
            thirdBookingPage.classList.toggle("hidden");
        }
    });
    if (bookingSubmitButton) {
        bookingSubmitButton.addEventListener("submit", (event) => {
            event.preventDefault();
        });
    }
    function isValidClientName(name) {
        return name.length > 2 && name.length <= 50;
    }
    function updateBookingSummary() {
        const bookingSummary = document.getElementById("booking-summary");
        if (!bookingSummary)
            return;
        bookingSummary.innerHTML = "";
        let totalAmount = 0;
        let summaryHTML = "<ul>";
        ticketCards.forEach((card) => {
            const ticketName = card.querySelector(".ticket-name");
            const ticketPrice = card.querySelector(".ticket-price-PH");
            const quantityDisplay = card.querySelector(".ticket-quantity");
            if (ticketName && ticketPrice && quantityDisplay) {
                const name = ticketName.innerText;
                const price = parseFloat(ticketPrice.innerText);
                const quantity = parseInt(quantityDisplay.innerText);
                const subtotal = price * quantity;
                totalAmount += subtotal;
                if (quantity > 0) {
                    summaryHTML += `<li>${name} × ${quantity} = ${subtotal.toFixed(2)} €</li>`;
                }
            }
        });
        summaryHTML += `</ul><br><p><strong>Total : ${totalAmount.toFixed(2)} €</strong></p>`;
        if (totalAmount > 0) {
            bookingSummary.innerHTML = summaryHTML;
        }
        else {
            bookingSummary.innerHTML = "Aucun billet sélectionné";
        }
    }
    function getConstraintDate(length) {
        const currentDate = new Date();
        const yyyy = currentDate.getFullYear().toString();
        const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
        const dd = String(currentDate.getDate()).padStart(2, "0");
        const hh = String(currentDate.getHours()).padStart(2, "0");
        const min = String(currentDate.getMinutes()).padStart(2, "0");
        if (length == "date-and-time") {
            return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
        }
        else if (length == "complete-date") {
            return `${yyyy}-${mm}-${dd}`;
        }
        else {
            return `${yyyy}-${mm}`;
        }
    }

}));
//# sourceMappingURL=index.js.map
