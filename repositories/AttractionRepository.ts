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
        return new Attraction(row.id_attraction, row.attraction_name, row.attraction_description, row.attraction_illustration_path);
      });

      return data;
    } catch (error) {
      return [];
    }
  }

  async findById(id: number): Promise<Attraction | null> {
      const query = {
        name: "fetch-attraction-by-id",
        text: `SELECT * FROM attraction WHERE id_attraction = $1`,
        values: [id],
      };
  
      try {
        const result = await this.pool.query(query);
        
        const attraction = new Attraction(
          result.rows[0].id_attraction,
          result.rows[0].attraction_name,
          result.rows[0].attraction_description,
          result.rows[0].attraction_illustration_path,
        );
        
        return attraction;
      }
      
      catch (error) {
        return null;
      }
    }
}