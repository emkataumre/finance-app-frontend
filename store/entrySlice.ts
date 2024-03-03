import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Entry } from "../entities/entry";
import { EntriesAPI } from "../api/entryAPI";
import { CreateEntryDto } from "../dtos/CreateEntryDto";
import { EntryProps } from "../types/EntryProps";
import { UpdateEntryDto } from "../dtos/UpdateEntryDto";

export interface EntryState {
  entries: Entry[];
  item: Entry;
  //item: Entry; I want it to be like this i think
  //item: EntryProps; Why is cant i use this
}

const initialState: EntryState = {
  entries: [],
  item: {
    id: 0,
    amount: 0,
    date: "",
    currency: "",
    name: "",
    comment: "",
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
  async ({ id, entry }: { id: number; entry: UpdateEntryDto }) => {
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
