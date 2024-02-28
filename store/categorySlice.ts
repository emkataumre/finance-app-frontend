import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "../entities/category";
import { CategoriesAPI } from "../api/categoryAPI";
import { CreateCategoryDto } from "../dtos/CreateCategoryDto";

export interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  "fetchCategories",
  async (thunkAPI) => {
    return await CategoriesAPI.fetchAll();
  }
);

export const createCategory = createAsyncThunk(
  "createCategory",
  async (category: CreateCategoryDto, thunkAPI) => {
    return await CategoriesAPI.createCategory(category);
  }
);

export const deleteCategory = createAsyncThunk(
  "delteCategory",
  async (id: number, thunkAPI) => {
    await CategoriesAPI.deleteCategory(id);
    return id;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.categories.push(action.payload);
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    });
  },
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
