import { Entry } from "./entry";

export class Category {
  id?: number;
  name: string;
  entries: Entry[];

  constructor(name: string, entries: Entry[], id?: number) {
    this.name = name;
    this.entries = entries;
    this.id = id;
  }
}
