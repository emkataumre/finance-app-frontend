import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Entry } from "../entities/entry";
import { EntriesAPI } from "../api/entryAPI";
import { CreateEntryDto } from "../dtos/CreateEntryDto";

export interface EntryState {
  entries: Entry[];
}

const initialState: EntryState = {
  entries: [],
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

export const entrySlice = createSlice({
  name: "entry",
  initialState,
  reducers: {},
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
  },
});

export const {} = entrySlice.actions;

export default entrySlice.reducer;
