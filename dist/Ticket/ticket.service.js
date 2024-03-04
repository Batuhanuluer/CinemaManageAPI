"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const ticket_shema_1 = require("./ticket.shema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const jwt = require("jsonwebtoken");
let TicketService = class TicketService {
    constructor(ticketModel) {
        this.ticketModel = ticketModel;
    }
    async getTickets() {
        return this.ticketModel.find();
    }
    async addNewTicket(ticketdto, authorizationHeader) {
        const user = await jwt.decode(authorizationHeader);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const newTicket = new this.ticketModel(ticketdto);
        await newTicket.save();
        return user.normalize;
    }
    async getTicketById(ticketId) {
        const ticket = await this.ticketModel.findById({ _id: ticketId });
        if (!ticket) {
            throw new common_1.NotFoundException('Ticket not found');
        }
        return ticket;
    }
    async updateTicket(ticketId, movieName, movieTime, name) {
        await this.ticketModel.findByIdAndUpdate({ _id: ticketId }, { movieName, movieTime, name });
        const newticket = await this.ticketModel.findById({ _id: ticketId });
        if (!newticket) {
            throw new common_1.NotFoundException('Ticket not found');
        }
        return newticket;
    }
    async deleteTicket(ticketId) {
        const ticket = await this.ticketModel.findByIdAndDelete({ _id: ticketId });
        return ticket;
    }
};
exports.TicketService = TicketService;
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ticket_shema_1.Ticket.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TicketService);
//# sourceMappingURL=ticket.service.js.map