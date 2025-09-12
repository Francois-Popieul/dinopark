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
        return new Dinosaur(row.id_dinosaur, row.dinosaur_name, row.diet, row.dinosaur_short_description, row.dinosaur_long_description, row.dino_illustration_path);
      });

      return data;
    } catch (error) {
      return [];
    }
  }

  async findById(id: number): Promise<Dinosaur | null> {
    const query = {
      name: "fetch-dino-by-id",
      text: `SELECT * FROM dinosaur WHERE id_dinosaur = $1`,
      values: [id],
    };

    try {
      const result = await this.pool.query(query);
      
      const dinosaur = new Dinosaur(
        result.rows[0].id_dinosaur,
        result.rows[0].dinosaur_name,
        result.rows[0].diet,
        result.rows[0].dinosaur_short_description,
        result.rows[0].dinosaur_long_description,
        result.rows[0].dino_illustration_path
      );
      
      return dinosaur;
    }
    
    catch (error) {
      return null;
    }
  }
}