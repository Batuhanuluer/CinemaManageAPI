import {Body, Controller, Get, Param, Patch, Post, Delete, Headers} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketDto } from './titcket.dto';

@Controller('tickets')
export class TicketController{
    constructor(private readonly ticketService : TicketService){}

    @Get()
    getTickets(){
      return this.ticketService.getTickets();
    }

    @Post()
    async addNewTicket(
        @Headers('authorization') authorizationHeader: string,
        @Body('movieName') ticketMoviename : string,
        @Body('movieTime') ticketTime : string,
        @Body('name') ticketName : string,
    ){
        const newTicket : TicketDto = {
            movieName : ticketMoviename,
            movieTime : ticketTime, 
            name : ticketName,
        }

        return await this.ticketService.addNewTicket(newTicket, authorizationHeader);
    }

    @Get(':id')
    async getOneticket(@Param('id') ticketId : string){
        return await this.ticketService.getTicketById(ticketId);
    }

    @Patch(':id')
    async updateTicket(@Param('id') ticketId : string,
        @Body('movieName') ticketMoviename : string,
        @Body('movieTime') ticketTime : string,
        @Body('name') ticketName : string,
    ){

            
        
        return await this.ticketService.updateTicket(ticketId,ticketMoviename,ticketTime,ticketName);
    }

    @Delete(':id')
    async deleteTicket(@Param('id') ticketid : string){
        return await this.ticketService.deleteTicket(ticketid);
    }
}