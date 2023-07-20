import { LoginTokenAssumedBy } from './LoginTokenAssumedBy';


export class LoginToken {
    private 'domain_id'?: string;
    private 'expires_at'?: string;
    public method?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'session_id'?: string;
    private 'session_user_id'?: string;
    private 'session_name'?: string;
    private 'assumed_by'?: LoginTokenAssumedBy;
    public constructor(domainId?: string, expiresAt?: string, method?: string, userId?: string, userName?: string, sessionId?: string) { 
        this['domain_id'] = domainId;
        this['expires_at'] = expiresAt;
        this['method'] = method;
        this['user_id'] = userId;
        this['user_name'] = userName;
        this['session_id'] = sessionId;
    }
    public withDomainId(domainId: string): LoginToken {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withExpiresAt(expiresAt: string): LoginToken {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): string | undefined {
        return this['expires_at'];
    }
    public withMethod(method: string): LoginToken {
        this['method'] = method;
        return this;
    }
    public withUserId(userId: string): LoginToken {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): LoginToken {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withSessionId(sessionId: string): LoginToken {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withSessionUserId(sessionUserId: string): LoginToken {
        this['session_user_id'] = sessionUserId;
        return this;
    }
    public set sessionUserId(sessionUserId: string  | undefined) {
        this['session_user_id'] = sessionUserId;
    }
    public get sessionUserId(): string | undefined {
        return this['session_user_id'];
    }
    public withSessionName(sessionName: string): LoginToken {
        this['session_name'] = sessionName;
        return this;
    }
    public set sessionName(sessionName: string  | undefined) {
        this['session_name'] = sessionName;
    }
    public get sessionName(): string | undefined {
        return this['session_name'];
    }
    public withAssumedBy(assumedBy: LoginTokenAssumedBy): LoginToken {
        this['assumed_by'] = assumedBy;
        return this;
    }
    public set assumedBy(assumedBy: LoginTokenAssumedBy  | undefined) {
        this['assumed_by'] = assumedBy;
    }
    public get assumedBy(): LoginTokenAssumedBy | undefined {
        return this['assumed_by'];
    }
}