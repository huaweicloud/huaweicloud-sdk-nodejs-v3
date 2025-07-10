import { CocUpdateChangeRequestBodyV2HistoryInfo } from './CocUpdateChangeRequestBodyV2HistoryInfo';
import { CocUpdateChangeRequestBodyV2SubTickets } from './CocUpdateChangeRequestBodyV2SubTickets';
import { CocUpdateChangeRequestBodyV2TicketInfo } from './CocUpdateChangeRequestBodyV2TicketInfo';


export class CocUpdateChangeRequestBodyV2 {
    private 'ticket_info'?: CocUpdateChangeRequestBodyV2TicketInfo;
    private 'sub_tickets'?: Array<CocUpdateChangeRequestBodyV2SubTickets>;
    private 'history_info'?: CocUpdateChangeRequestBodyV2HistoryInfo;
    public constructor() { 
    }
    public withTicketInfo(ticketInfo: CocUpdateChangeRequestBodyV2TicketInfo): CocUpdateChangeRequestBodyV2 {
        this['ticket_info'] = ticketInfo;
        return this;
    }
    public set ticketInfo(ticketInfo: CocUpdateChangeRequestBodyV2TicketInfo  | undefined) {
        this['ticket_info'] = ticketInfo;
    }
    public get ticketInfo(): CocUpdateChangeRequestBodyV2TicketInfo | undefined {
        return this['ticket_info'];
    }
    public withSubTickets(subTickets: Array<CocUpdateChangeRequestBodyV2SubTickets>): CocUpdateChangeRequestBodyV2 {
        this['sub_tickets'] = subTickets;
        return this;
    }
    public set subTickets(subTickets: Array<CocUpdateChangeRequestBodyV2SubTickets>  | undefined) {
        this['sub_tickets'] = subTickets;
    }
    public get subTickets(): Array<CocUpdateChangeRequestBodyV2SubTickets> | undefined {
        return this['sub_tickets'];
    }
    public withHistoryInfo(historyInfo: CocUpdateChangeRequestBodyV2HistoryInfo): CocUpdateChangeRequestBodyV2 {
        this['history_info'] = historyInfo;
        return this;
    }
    public set historyInfo(historyInfo: CocUpdateChangeRequestBodyV2HistoryInfo  | undefined) {
        this['history_info'] = historyInfo;
    }
    public get historyInfo(): CocUpdateChangeRequestBodyV2HistoryInfo | undefined {
        return this['history_info'];
    }
}