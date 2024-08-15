import { AuthorizeTicketCommonInfo } from './AuthorizeTicketCommonInfo';


export class AuthorizeTicketInfo {
    private 'ticket_id'?: string;
    private 'target_id'?: string;
    private 'scope_id'?: string;
    public title?: string;
    private 'ticket_type'?: AuthorizeTicketInfoTicketTypeEnum | string;
    public owner?: Array<string>;
    public level?: string;
    public status?: AuthorizeTicketInfoStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withTicketId(ticketId: string): AuthorizeTicketInfo {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withTargetId(targetId: string): AuthorizeTicketInfo {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withScopeId(scopeId: string): AuthorizeTicketInfo {
        this['scope_id'] = scopeId;
        return this;
    }
    public set scopeId(scopeId: string  | undefined) {
        this['scope_id'] = scopeId;
    }
    public get scopeId(): string | undefined {
        return this['scope_id'];
    }
    public withTitle(title: string): AuthorizeTicketInfo {
        this['title'] = title;
        return this;
    }
    public withTicketType(ticketType: AuthorizeTicketInfoTicketTypeEnum | string): AuthorizeTicketInfo {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: AuthorizeTicketInfoTicketTypeEnum | string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): AuthorizeTicketInfoTicketTypeEnum | string | undefined {
        return this['ticket_type'];
    }
    public withOwner(owner: Array<string>): AuthorizeTicketInfo {
        this['owner'] = owner;
        return this;
    }
    public withLevel(level: string): AuthorizeTicketInfo {
        this['level'] = level;
        return this;
    }
    public withStatus(status: AuthorizeTicketInfoStatusEnum | string): AuthorizeTicketInfo {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): AuthorizeTicketInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): AuthorizeTicketInfo {
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
export enum AuthorizeTicketInfoTicketTypeEnum {
    CHANGE = 'CHANGE',
    INCIDENT = 'INCIDENT',
    WAR_ROOM = 'WAR_ROOM',
    ALARM = 'ALARM'
}
/**
    * @export
    * @enum {string}
    */
export enum AuthorizeTicketInfoStatusEnum {
    OPEN = 'open',
    CLOSE = 'close'
}
