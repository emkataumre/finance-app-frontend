import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Entry } from "../entities/entry";
import { EntriesAPI } from "../api/entryAPI";
import { CreateEntryDto } from "../dtos/CreateEntryDto";
import { UpdateEntryDto } from "../dtos/UpdateEntryDto";
import { CreateCategoryDto } from "../dtos/CreateCategoryDto";
import { Category } from "../entities/category";

export interface EntryState {
  entries: Entry[];
  item: Entry;
  //item: EntryProps; Why is cant i use this
}

const initialState: EntryState = {
  entries: [],
  item: {
    id: undefined,
    amount: 0,
    date: "",
    currency: "",
    name: "",
    comment: "",
    categoryId: 0,
  },
};

export const fetchEntries = createAsyncThunk("fetchEntries", async () => {
  return EntriesAPI.fetchAll();
});

export const createEntry = createAsyncThunk(
  "createEntry",
  async (entry: CreateEntryDto) => {
    return EntriesAPI.createEntry(entry);
  }
);

export const deleteEntry = createAsyncThunk(
  "deleteEntry",
  async (id: number) => {
    await EntriesAPI.deleteEntry(id);
    return id;
  }
);

export const updateEntry = createAsyncThunk(
  "updateEntry",
  async ({ id, entry }: { id?: number; entry: UpdateEntryDto }) => {
    if (id === undefined) {
      throw new Error(
        "You are trying to update a non-existing entry(id is not defined)"
      ); // Or handle it in a different way
    }
    await EntriesAPI.updateEntry(id, entry);
    return entry;
  }
);

export const entrySlice = createSlice({
  name: "entry",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.item = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEntries.fulfilled, (state, action) => {
      state.entries = action.payload;
    });
    builder.addCase(createEntry.fulfilled, (state, action) => {
      state.entries.push(action.payload);
    });
    builder.addCase(deleteEntry.fulfilled, (state, action) => {
      state.entries = state.entries.filter(
        (entry) => entry.id !== action.payload
      );
    });
    builder.addCase(updateEntry.fulfilled, (state, action) => {});
  },
});

export const { setItem } = entrySlice.actions;

export default entrySlice.reducer;
