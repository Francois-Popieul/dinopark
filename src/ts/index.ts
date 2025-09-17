const dateInput: HTMLInputElement | null = document.getElementById("booking-date") as HTMLInputElement;

if (dateInput) {
    dateInput.min = getConstraintDate("complete-date");
}

const ticketCards = document.querySelectorAll(".booking-page-ticket-card");

ticketCards.forEach((card) => {
    const ticketName = card.querySelector(".ticket-name") as HTMLParagraphElement;
    const ticketPrice = card.querySelector(".ticket-price") as HTMLParagraphElement;
    const decreaseBtn = card.querySelector(".decrease-button") as HTMLButtonElement;
    const increaseBtn = card.querySelector(".increase-button") as HTMLButtonElement;
    const quantityDisplay = card.querySelector(".ticket-quantity") as HTMLParagraphElement;

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


function getConstraintDate(length?: string): string {
    const currentDate: Date = new Date();
    const yyyy: string = currentDate.getFullYear().toString();
    const mm: string = String(currentDate.getMonth() + 1).padStart(2, "0");
    const dd: string = String(currentDate.getDate()).padStart(2, "0");
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