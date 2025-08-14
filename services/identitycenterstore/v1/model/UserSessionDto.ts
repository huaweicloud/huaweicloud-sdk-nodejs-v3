

export class UserSessionDto {
    private 'creation_time'?: number;
    private 'ip_address'?: string;
    private 'session_id'?: string;
    private 'session_not_valid_after'?: number;
    private 'user_agent'?: string;
    private 'user_id'?: string;
    public constructor(creationTime?: number, sessionId?: string, sessionNotValidAfter?: number, userId?: string) { 
        this['creation_time'] = creationTime;
        this['session_id'] = sessionId;
        this['session_not_valid_after'] = sessionNotValidAfter;
        this['user_id'] = userId;
    }
    public withCreationTime(creationTime: number): UserSessionDto {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: number  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): number | undefined {
        return this['creation_time'];
    }
    public withIpAddress(ipAddress: string): UserSessionDto {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withSessionId(sessionId: string): UserSessionDto {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withSessionNotValidAfter(sessionNotValidAfter: number): UserSessionDto {
        this['session_not_valid_after'] = sessionNotValidAfter;
        return this;
    }
    public set sessionNotValidAfter(sessionNotValidAfter: number  | undefined) {
        this['session_not_valid_after'] = sessionNotValidAfter;
    }
    public get sessionNotValidAfter(): number | undefined {
        return this['session_not_valid_after'];
    }
    public withUserAgent(userAgent: string): UserSessionDto {
        this['user_agent'] = userAgent;
        return this;
    }
    public set userAgent(userAgent: string  | undefined) {
        this['user_agent'] = userAgent;
    }
    public get userAgent(): string | undefined {
        return this['user_agent'];
    }
    public withUserId(userId: string): UserSessionDto {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}