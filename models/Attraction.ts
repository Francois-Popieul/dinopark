export interface AttractionTypeRow {
  id_attraction: number | null;
  attraction_name: string;
  attraction_description: string;
  attraction_illustration: string;
}

export class Attraction {
  protected id_attraction: number | null;
  protected attraction_name: string;
  protected attraction_description: string;
  protected attraction_illustration: string;

  constructor(id: number | null, name: string, description: string, illustration_path: string) {
    this.id_attraction = id;
    this.attraction_name = name;
    this.attraction_description = description;
    this.attraction_illustration = illustration_path;
  }
}