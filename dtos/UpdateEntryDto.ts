export class UpdateEntryDto {
  id: number;
  amount?: number;
  date?: Date;
  currency?: string;
  name?: string;
  comment?: string;

  constructor(
    id: number,
    amount?: number,
    date?: Date,
    currency?: string,
    name?: string,
    comment?: string
  ) {
    this.id = id;
    this.amount = amount;
    this.date = date;
    this.currency = currency;
    this.name = name;
    this.comment = comment;
  }
}
