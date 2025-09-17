(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    const dateInput = document.getElementById("booking-date");
    if (dateInput) {
        dateInput.min = getConstraintDate();
    }
    const ticketCards = document.querySelectorAll(".booking-page-ticket-card");
    ticketCards.forEach((card) => {
        const ticketName = card.querySelector(".ticket-name");
        const ticketPrice = card.querySelector(".ticket-price");
        const decreaseBtn = card.querySelector(".decrease-button");
        const increaseBtn = card.querySelector(".increase-button");
        const quantityDisplay = card.querySelector(".ticket-quantity");
        let quantity = 0;
        console.log(ticketName.innerText);
        console.log(ticketPrice.innerText);
        increaseBtn.addEventListener("click", () => {
            quantity++;
            quantityDisplay.textContent = quantity.toString();
        });
        decreaseBtn.addEventListener("click", () => {
            if (quantity > 0) {
                quantity--;
                quantityDisplay.textContent = quantity.toString();
            }
        });
    });
    function getConstraintDate(length) {
        const currentDate = new Date();
        const yyyy = currentDate.getFullYear().toString();
        const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
        const dd = String(currentDate.getDate()).padStart(2, "0");
        String(currentDate.getHours()).padStart(2, "0");
        String(currentDate.getMinutes()).padStart(2, "0");
        {
            return `${yyyy}-${mm}-${dd}`;
        }
    }

}));
//# sourceMappingURL=index.js.map
