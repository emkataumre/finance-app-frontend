export type RootStackParamList = {
  EntryListScreen: { sort: "latest" | "top" } | undefined;
  EntryDeleteScreen: { EntryId: number };
  EntryEditScreen: { EntryId: number };
  AddNewEntryScreen: { sort: "latest" | "top" } | undefined;
};
