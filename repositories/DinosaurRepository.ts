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
    }
    catch (error) {
      return [];
    }
  }

  async findDinoSaurShortList(): Promise<Dinosaur[]> {
    const query = {
      name: "fetch-dinosaur-short-list",
      text: `SELECT * FROM dinosaur ORDER BY RANDOM() LIMIT 3`,
    };

    try {
      const result = await this.pool.query(query);

      const data = result.rows.map((row) => {
        return new Dinosaur(row.id_dinosaur, row.dinosaur_name, row.diet, row.dinosaur_short_description, row.dinosaur_long_description, row.dino_illustration_path);
      });

      return data;
    }
    catch (error) {
      return [];
    }
  }

  async findAllDiets(): Promise<string[]> {
    const query = {
      name: "fetch-all-dinosaur-diet",
      text: `SELECT DISTINCT diet FROM dinosaur`,
    };

    try {
      const result = await this.pool.query(query);
      return result.rows.map(row => row.diet);
    }
    catch (error) {
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

  async findAllDinosaurByDiet(filteredDiet: string): Promise<Dinosaur[]> {
    const query = {
      name: "fetch-all-dinosaurs-by-diet",
      text: `SELECT * FROM dinosaur WHERE diet = $1`,
      values: [filteredDiet],
    };

    try {
      const result = await this.pool.query(query);

      const data = result.rows.map((row) => {
        return new Dinosaur(row.id_dinosaur, row.dinosaur_name, row.diet, row.dinosaur_short_description, row.dinosaur_long_description, row.dino_illustration_path);
      });

      return data;
    }
    catch (error) {
      return [];
    }
  }
}