import { ListTicketParamsWithPage } from './ListTicketParamsWithPage';


export class ListTicketsRequest {
    private 'ticket_type'?: string;
    public body?: ListTicketParamsWithPage;
    public constructor(ticketType?: string) { 
        this['ticket_type'] = ticketType;
    }
    public withTicketType(ticketType: string): ListTicketsRequest {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): string | undefined {
        return this['ticket_type'];
    }
    public withBody(body: ListTicketParamsWithPage): ListTicketsRequest {
        this['body'] = body;
        return this;
    }
}