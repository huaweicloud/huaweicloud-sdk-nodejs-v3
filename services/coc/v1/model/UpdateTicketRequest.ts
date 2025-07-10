import { CocUpdateChangeRequestBody } from './CocUpdateChangeRequestBody';


export class UpdateTicketRequest {
    private 'ticket_type'?: string;
    private 'ticket_id'?: string;
    public body?: CocUpdateChangeRequestBody;
    public constructor(ticketType?: string, ticketId?: string) { 
        this['ticket_type'] = ticketType;
        this['ticket_id'] = ticketId;
    }
    public withTicketType(ticketType: string): UpdateTicketRequest {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): string | undefined {
        return this['ticket_type'];
    }
    public withTicketId(ticketId: string): UpdateTicketRequest {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withBody(body: CocUpdateChangeRequestBody): UpdateTicketRequest {
        this['body'] = body;
        return this;
    }
}