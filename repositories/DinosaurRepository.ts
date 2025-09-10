import { Repository } from "../libs/Repository";
import { Dinosaur } from "../models/Dinosaur";

export class DinosaurRepository extends Repository {
  async findAll(): Promise<Dinosaur[]> {
    const query = {
      name: "fetch-all-dinosaurs",
      text: `SELECT * FROM dinosaur`,
    };

    try {
      const result = await this.pool.query(query);

      const data = result.rows.map((row) => {
        return new Dinosaur(row.id_dinosaur, row.dinosaur_name, row.diet, row.dinosaur_description, row.dino_illustration_path);
      });

      return data;
    } catch (error) {
      return [];
    }
  }
}