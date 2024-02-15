export interface EntryParams {
  item: {
    amount: number;
    date: string;
    currency: string;
    name: string;
    comment: string;
  };
}

export interface EntryListProps {
  entries: EntryParams[];
}
