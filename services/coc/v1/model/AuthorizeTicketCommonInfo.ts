

export class AuthorizeTicketCommonInfo {
    private 'ticket_id'?: string;
    private 'target_id'?: string;
    private 'scope_id'?: string;
    public title?: string;
    private 'ticket_type'?: AuthorizeTicketCommonInfoTicketTypeEnum | string;
    public owner?: Array<string>;
    public level?: string;
    public status?: AuthorizeTicketCommonInfoStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withTicketId(ticketId: string): AuthorizeTicketCommonInfo {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withTargetId(targetId: string): AuthorizeTicketCommonInfo {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withScopeId(scopeId: string): AuthorizeTicketCommonInfo {
        this['scope_id'] = scopeId;
        return this;
    }
    public set scopeId(scopeId: string  | undefined) {
        this['scope_id'] = scopeId;
    }
    public get scopeId(): string | undefined {
        return this['scope_id'];
    }
    public withTitle(title: string): AuthorizeTicketCommonInfo {
        this['title'] = title;
        return this;
    }
    public withTicketType(ticketType: AuthorizeTicketCommonInfoTicketTypeEnum | string): AuthorizeTicketCommonInfo {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: AuthorizeTicketCommonInfoTicketTypeEnum | string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): AuthorizeTicketCommonInfoTicketTypeEnum | string | undefined {
        return this['ticket_type'];
    }
    public withOwner(owner: Array<string>): AuthorizeTicketCommonInfo {
        this['owner'] = owner;
        return this;
    }
    public withLevel(level: string): AuthorizeTicketCommonInfo {
        this['level'] = level;
        return this;
    }
    public withStatus(status: AuthorizeTicketCommonInfoStatusEnum | string): AuthorizeTicketCommonInfo {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): AuthorizeTicketCommonInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): AuthorizeTicketCommonInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuthorizeTicketCommonInfoTicketTypeEnum {
    CHANGE = 'CHANGE',
    INCIDENT = 'INCIDENT',
    WAR_ROOM = 'WAR_ROOM',
    ALARM = 'ALARM'
}
/**
    * @export
    * @enum {string}
    */
export enum AuthorizeTicketCommonInfoStatusEnum {
    OPEN = 'open',
    CLOSE = 'close'
}
