export interface EntryProps {
  item: {
    id: number;
    amount: number;
    date: Date;
    currency: string;
    name: string;
    comment: string;
  };
}

export interface EntryListProps {
  entries: EntryProps[];
}
