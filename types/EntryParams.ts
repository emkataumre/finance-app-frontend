import { Currency } from "./misc";

export interface EntryParams {
  item: {
    amount: number;
    date: string;
    currency: Currency;
    name: string;
    comment: string;
  };
}

export interface EntryListProps {
  entries: EntryParams[];
}
