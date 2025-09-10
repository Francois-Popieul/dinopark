import { Repository } from "../libs/Repository";
import { Attraction } from "../models/Attraction";

export class AttractionRepository extends Repository {
  async findAll(): Promise<Attraction[]> {
    const query = {
      name: "fetch-all-attractions",
      text: `SELECT * FROM attraction`,
    };

    try {
      const result = await this.pool.query(query);

      const data = result.rows.map((row) => {
        return new Attraction(row.id_attraction, row.attraction_name, row.attraction_description, row.attraction_illustration);
      });

      return data;
    } catch (error) {
      return [];
    }
  }
}