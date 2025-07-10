import { ListTicketParams } from './ListTicketParams';


export class ListTicketOperationHistoriesRequest {
    private 'ticket_type'?: string;
    public body?: ListTicketParams;
    public constructor(ticketType?: string) { 
        this['ticket_type'] = ticketType;
    }
    public withTicketType(ticketType: string): ListTicketOperationHistoriesRequest {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): string | undefined {
        return this['ticket_type'];
    }
    public withBody(body: ListTicketParams): ListTicketOperationHistoriesRequest {
        this['body'] = body;
        return this;
    }
}