

export class CreateExternalIssuesResponseData {
    private 'ticket_id'?: string;
    public constructor(ticketId?: string) { 
        this['ticket_id'] = ticketId;
    }
    public withTicketId(ticketId: string): CreateExternalIssuesResponseData {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
}