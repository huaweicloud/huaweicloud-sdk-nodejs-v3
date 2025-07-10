import { ExecuteActionParams } from './ExecuteActionParams';


export class ExecuteTicketActionRequest {
    private 'ticket_type'?: string;
    public body?: ExecuteActionParams;
    public constructor(ticketType?: string) { 
        this['ticket_type'] = ticketType;
    }
    public withTicketType(ticketType: string): ExecuteTicketActionRequest {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): string | undefined {
        return this['ticket_type'];
    }
    public withBody(body: ExecuteActionParams): ExecuteTicketActionRequest {
        this['body'] = body;
        return this;
    }
}