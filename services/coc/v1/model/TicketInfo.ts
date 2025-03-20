

export class TicketInfo {
    private 'ticket_id'?: string;
    private 'ticket_type'?: string;
    private 'target_id'?: string;
    private 'scope_id'?: string;
    public constructor() { 
    }
    public withTicketId(ticketId: string): TicketInfo {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withTicketType(ticketType: string): TicketInfo {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): string | undefined {
        return this['ticket_type'];
    }
    public withTargetId(targetId: string): TicketInfo {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withScopeId(scopeId: string): TicketInfo {
        this['scope_id'] = scopeId;
        return this;
    }
    public set scopeId(scopeId: string  | undefined) {
        this['scope_id'] = scopeId;
    }
    public get scopeId(): string | undefined {
        return this['scope_id'];
    }
}