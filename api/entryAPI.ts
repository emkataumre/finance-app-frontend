import axios from "axios";
import { CreateEntryDto } from "../dtos/CreateEntryDto";

export class EntriesAPI {
  static baseUrl = "http://192.168.246.220:3000/entry";

  static async fetchAll() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  static async createEntry(category: CreateEntryDto) {
    const response = await axios.post(this.baseUrl, category);
    return response.data;
  }

  static async deleteEntry(id: number) {
    const response = await axios.delete(`${this.baseUrl}/${id}`);

    return response.data;
  }
}