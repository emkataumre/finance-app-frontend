export interface EntryProps {
  item: {
    id: number;
    amount: number;
    date: string;
    currency: string;
    name: string;
    comment: string;
  };
}

export interface EntryListProps {
  entries: EntryProps[];
}
