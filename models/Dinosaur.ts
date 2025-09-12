export interface DinosaurTypeRow {
    id_dinosaur: number | null;
    dinosaur_name: string;
    diet: string;
    dinosaur_short_description: string;
    dinosaur_long_description: string;
    dino_illustration_path: string;
}

export class Dinosaur {
    protected id_dinosaur: number | null;
    protected dinosaur_name: string;
    protected diet: string;
    protected dinosaur_short_description: string;
    protected dinosaur_long_description: string;
    protected dino_illustration_path: string;

    constructor(id: number | null, name: string, diet: string, short_description: string, long_description: string, illustration_path: string) {
        this.id_dinosaur = id;
        this.dinosaur_name = name;
        this.diet = diet;
        this.dinosaur_short_description = short_description;
        this.dinosaur_long_description = long_description;
        this.dino_illustration_path = illustration_path;
    }
}