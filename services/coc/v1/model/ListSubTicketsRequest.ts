

export class ListSubTicketsRequest {
    private 'ticket_type'?: string;
    private 'ticket_id'?: string;
    public type?: string;
    public limit?: number;
    public marker?: string;
    public constructor(ticketType?: string, ticketId?: string, type?: string) { 
        this['ticket_type'] = ticketType;
        this['ticket_id'] = ticketId;
        this['type'] = type;
    }
    public withTicketType(ticketType: string): ListSubTicketsRequest {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): string | undefined {
        return this['ticket_type'];
    }
    public withTicketId(ticketId: string): ListSubTicketsRequest {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withType(type: string): ListSubTicketsRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): ListSubTicketsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSubTicketsRequest {
        this['marker'] = marker;
        return this;
    }
}