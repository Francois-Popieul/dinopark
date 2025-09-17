import { Repository } from "../libs/Repository";

export class BookingRepository extends Repository {
    async findAll(): Promise<any[]> {
        const query = {
            name: "fetch-all-tickets",
            text: `SELECT * FROM ticket`,
        };

        return [];
    }
}