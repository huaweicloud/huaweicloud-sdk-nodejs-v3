import { LoginTokenAssumedBy } from './LoginTokenAssumedBy';


export class LoginToken {
    private 'domain_id': string | undefined;
    private 'expires_at': string | undefined;
    public method: string;
    private 'user_id': string | undefined;
    private 'user_name': string | undefined;
    private 'session_id': string | undefined;
    private 'session_name'?: string | undefined;
    private 'assumed_by'?: LoginTokenAssumedBy | undefined;
    public constructor(domainId: any, expiresAt: any, method: any, userId: any, userName: any, sessionId: any) { 
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
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withExpiresAt(expiresAt: string): LoginToken {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt() {
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
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withUserName(userName: string): LoginToken {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withSessionId(sessionId: string): LoginToken {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId() {
        return this['session_id'];
    }
    public withSessionName(sessionName: string): LoginToken {
        this['session_name'] = sessionName;
        return this;
    }
    public set sessionName(sessionName: string | undefined) {
        this['session_name'] = sessionName;
    }
    public get sessionName() {
        return this['session_name'];
    }
    public withAssumedBy(assumedBy: LoginTokenAssumedBy): LoginToken {
        this['assumed_by'] = assumedBy;
        return this;
    }
    public set assumedBy(assumedBy: LoginTokenAssumedBy | undefined) {
        this['assumed_by'] = assumedBy;
    }
    public get assumedBy() {
        return this['assumed_by'];
    }
}