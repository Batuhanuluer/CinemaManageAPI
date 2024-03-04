/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { TicketService } from './ticket.service';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    getTickets(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./ticket.shema").Ticket> & import("./ticket.shema").Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./ticket.shema").Ticket> & import("./ticket.shema").Ticket & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    addNewTicket(authorizationHeader: string, ticketMoviename: string, ticketTime: string, ticketName: string): Promise<any>;
    getOneticket(ticketId: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./ticket.shema").Ticket> & import("./ticket.shema").Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./ticket.shema").Ticket> & import("./ticket.shema").Ticket & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    updateTicket(ticketId: string, ticketMoviename: string, ticketTime: string, ticketName: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./ticket.shema").Ticket> & import("./ticket.shema").Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./ticket.shema").Ticket> & import("./ticket.shema").Ticket & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    deleteTicket(ticketid: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./ticket.shema").Ticket> & import("./ticket.shema").Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("./ticket.shema").Ticket> & import("./ticket.shema").Ticket & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
