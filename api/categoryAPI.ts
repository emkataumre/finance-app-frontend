import axios from "axios";
import { CreateCategoryDto } from "../dtos/CreateCategoryDto";

export class CategoriesAPI {
  static baseUrl = "http://192.168.246.220:3000/category";

  static async fetchAll() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  static async createCategory(category: CreateCategoryDto) {
    const response = await axios.post(this.baseUrl, category);
    return response.data;
  }

  static async deleteCategory(id: number) {
    const response = await axios.delete(`${this.baseUrl}/${id}`);
    console.log(id);

    return response.data;
  }
}
