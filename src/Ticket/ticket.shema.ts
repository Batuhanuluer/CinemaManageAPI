import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TicketDocument = HydratedDocument<Ticket>;

@Schema()
export class Ticket {
  @Prop()
  movieName: string;

  @Prop()
  movieTime: string;

  @Prop()
  name: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);