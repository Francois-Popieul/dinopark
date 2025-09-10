export interface DinosaurTypeRow {
    id_dinosaur: number | null;
    dinosaur_name: string;
    diet: string;
    dinosaur_description: string;
    dino_illustration_path: string;
}

export class Dinosaur {
    protected id_dinosaur: number | null;
    protected dinosaur_name: string;
    protected diet: string;
    protected dinosaur_description: string;
    protected dino_illustration_path: string;

    constructor(id: number | null, name: string, diet: string, description: string, illustration_path: string) {
        this.id_dinosaur = id;
        this.dinosaur_name = name;
        this.diet = diet;
        this.dinosaur_description = description;
        this.dino_illustration_path = illustration_path;
    }
}