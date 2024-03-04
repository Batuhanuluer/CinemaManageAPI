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
/// <reference types="mongoose/types/inferschematype" />
import { Ticket, TicketDocument } from './ticket.shema';
import { Model } from "mongoose";
import { TicketDto } from "./titcket.dto";
export declare class TicketService {
    private ticketModel;
    constructor(ticketModel: Model<TicketDocument>);
    getTickets(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Ticket> & Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Ticket> & Ticket & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    addNewTicket(ticketdto: TicketDto, authorizationHeader: string): Promise<any>;
    getTicketById(ticketId: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Ticket> & Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Ticket> & Ticket & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    updateTicket(ticketId: any, movieName: any, movieTime: any, name: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Ticket> & Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Ticket> & Ticket & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    deleteTicket(ticketId: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Ticket> & Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, Ticket> & Ticket & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
