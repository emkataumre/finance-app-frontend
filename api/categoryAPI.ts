import axios from "axios";
import { CreateCategoryDto } from "../dtos/CreateCategoryDto";

export class CategoriesAPI {
  static baseUrl = "http://172.20.10.2:3000/category";

  static async fetchAll() {
    const response = await axios.get(this.baseUrl);
    console.log("from api", response.data);
    return response.data;
  }

  static async createCategory(category: CreateCategoryDto) {
    const response = await axios.post(this.baseUrl, category);
    return response.data;
  }
}
