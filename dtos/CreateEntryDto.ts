export class CreateEntryDto {
  amount: number;
  date: Date;
  currency: string;
  name: string;
  comment: string;
  constructor(
    amount: number,
    date: Date,
    currency: string,
    name: string,
    comment: string
  ) {
    this.amount = amount;
    this.date = date;
    this.currency = currency;
    this.name = name;
    this.comment = comment;
  }
}
