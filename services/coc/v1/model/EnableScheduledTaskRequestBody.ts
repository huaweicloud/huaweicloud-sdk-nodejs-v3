import { TicketInfo } from './TicketInfo';
import { TicketInformation } from './TicketInformation';


export class EnableScheduledTaskRequestBody {
    private 'ticket_infos'?: Array<TicketInfo>;
    public constructor() { 
    }
    public withTicketInfos(ticketInfos: Array<TicketInfo>): EnableScheduledTaskRequestBody {
        this['ticket_infos'] = ticketInfos;
        return this;
    }
    public set ticketInfos(ticketInfos: Array<TicketInfo>  | undefined) {
        this['ticket_infos'] = ticketInfos;
    }
    public get ticketInfos(): Array<TicketInfo> | undefined {
        return this['ticket_infos'];
    }
}