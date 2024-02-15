export type RootStackParamList = {
  EntryList: { sort: "latest" | "top" } | undefined;
  EntryDelete: { EntryId: number };
  EntryEdit: { EntryId: number };
};
