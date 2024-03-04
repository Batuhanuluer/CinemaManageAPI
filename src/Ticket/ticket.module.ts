import { Module } from "@nestjs/common";
import { TicketController } from "./ticket.controller";
import { TicketService } from "./ticket.service";
import {MongooseModule} from '@nestjs/mongoose'
import { TicketSchema } from "./ticket.shema";
import { AuthSchema } from "src/Auth/auth.schema";

@Module({
    imports :[MongooseModule.forFeature([{name :'Ticket',schema: TicketSchema}]),
        MongooseModule.forFeature([{name :'Auth',schema: AuthSchema}])
],
    controllers:[TicketController],
    providers : [TicketService],
})
export class TicketModule{}