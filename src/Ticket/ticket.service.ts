import { Injectable ,NotFoundException } from "@nestjs/common";
import { Ticket, TicketDocument } from './ticket.shema'; // Bu import yolu dosyanın bulunduğu yere göre güncellenmelidir
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { throwError } from "rxjs";
import { TicketDto } from "./titcket.dto";
import * as jwt from 'jsonwebtoken';


@Injectable()
export class TicketService{
    constructor(@InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>){}

    async getTickets(){
        return  this.ticketModel.find();
    }

    async addNewTicket(ticketdto : TicketDto, authorizationHeader : string){
        const user = await jwt.decode(authorizationHeader)

        if(!user){
            throw new NotFoundException('User not found')
        }

        const newTicket = new this.ticketModel(ticketdto);
        await newTicket.save();
        return user.normalize
    }

    async getTicketById(ticketId){
        const ticket = await this.ticketModel.findById({_id :ticketId});
        if(!ticket){
            throw new NotFoundException('Ticket not found')
        }

        return ticket;
    }

    async updateTicket(ticketId,movieName,movieTime,name){
        await this.ticketModel.findByIdAndUpdate({_id :ticketId},{movieName,movieTime,name});
        const newticket =  await this.ticketModel.findById({_id :ticketId});
        if(!newticket){
            throw new NotFoundException('Ticket not found')
        }
        return newticket;
    }

    async deleteTicket(ticketId){
        const ticket =    await this.ticketModel.findByIdAndDelete({_id:ticketId});
        return ticket;
    }
}