export class Entry {
  id?: number;
  amount: number;
  date: string;
  currency: string;
  name: string;
  comment: string;
  categoryId: number;

  constructor(
    amount: number,
    date: string,
    currency: string,
    name: string,
    comment: string,
    categoryId: number,
    id?: number
  ) {
    this.id = id;
    this.amount = amount;
    this.date = date;
    this.currency = currency;
    this.name = name;
    this.comment = comment;
    this.categoryId = categoryId; // Store categoryId instead of the entire Category object
  }
}
