export class PayCard {
    constructor(private cardNumber: string) { }

    private algoLuhn(value: string): boolean {
        const digits = value.replace(/\D/g, '').split('').map(Number).reverse();
        let sum = 0;

        for (let i = 0; i < digits.length; i++) {

            let digit = digits[i];

            if (i % 2 === 1) {
                digit *= 2;

                if (digit > 9) digit -= 9;
            }
            sum += digit;
        }

        return sum % 10 === 0;
    }

    public isValid(): boolean {
        const cleaned = this.cardNumber.replace(/\D/g, '');

        if (!/^\d{13,19}$/.test(cleaned)) {
            return false;
        }

        const isValid = this.algoLuhn(cleaned);
        return isValid;
    }
}