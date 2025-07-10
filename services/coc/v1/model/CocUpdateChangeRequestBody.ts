import { CocUpdateChangeRequestBodyHistoryInfo } from './CocUpdateChangeRequestBodyHistoryInfo';
import { CocUpdateChangeRequestBodySubTickets } from './CocUpdateChangeRequestBodySubTickets';
import { CocUpdateChangeRequestBodyTicketInfo } from './CocUpdateChangeRequestBodyTicketInfo';


export class CocUpdateChangeRequestBody {
    private 'ticket_info'?: CocUpdateChangeRequestBodyTicketInfo;
    private 'sub_tickets'?: Array<CocUpdateChangeRequestBodySubTickets>;
    private 'history_info'?: CocUpdateChangeRequestBodyHistoryInfo;
    public constructor() { 
    }
    public withTicketInfo(ticketInfo: CocUpdateChangeRequestBodyTicketInfo): CocUpdateChangeRequestBody {
        this['ticket_info'] = ticketInfo;
        return this;
    }
    public set ticketInfo(ticketInfo: CocUpdateChangeRequestBodyTicketInfo  | undefined) {
        this['ticket_info'] = ticketInfo;
    }
    public get ticketInfo(): CocUpdateChangeRequestBodyTicketInfo | undefined {
        return this['ticket_info'];
    }
    public withSubTickets(subTickets: Array<CocUpdateChangeRequestBodySubTickets>): CocUpdateChangeRequestBody {
        this['sub_tickets'] = subTickets;
        return this;
    }
    public set subTickets(subTickets: Array<CocUpdateChangeRequestBodySubTickets>  | undefined) {
        this['sub_tickets'] = subTickets;
    }
    public get subTickets(): Array<CocUpdateChangeRequestBodySubTickets> | undefined {
        return this['sub_tickets'];
    }
    public withHistoryInfo(historyInfo: CocUpdateChangeRequestBodyHistoryInfo): CocUpdateChangeRequestBody {
        this['history_info'] = historyInfo;
        return this;
    }
    public set historyInfo(historyInfo: CocUpdateChangeRequestBodyHistoryInfo  | undefined) {
        this['history_info'] = historyInfo;
    }
    public get historyInfo(): CocUpdateChangeRequestBodyHistoryInfo | undefined {
        return this['history_info'];
    }
}