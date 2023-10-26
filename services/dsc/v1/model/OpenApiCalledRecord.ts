

export class OpenApiCalledRecord {
    private 'user_name'?: string;
    private 'user_id'?: string;
    private 'domain_name'?: string;
    private 'domain_id'?: string;
    private 'request_url'?: string;
    private 'request_method'?: string;
    private 'response_code'?: string;
    private 'fail_reason'?: string;
    public timestamp?: number;
    public constructor() { 
    }
    public withUserName(userName: string): OpenApiCalledRecord {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserId(userId: string): OpenApiCalledRecord {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withDomainName(domainName: string): OpenApiCalledRecord {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withDomainId(domainId: string): OpenApiCalledRecord {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRequestUrl(requestUrl: string): OpenApiCalledRecord {
        this['request_url'] = requestUrl;
        return this;
    }
    public set requestUrl(requestUrl: string  | undefined) {
        this['request_url'] = requestUrl;
    }
    public get requestUrl(): string | undefined {
        return this['request_url'];
    }
    public withRequestMethod(requestMethod: string): OpenApiCalledRecord {
        this['request_method'] = requestMethod;
        return this;
    }
    public set requestMethod(requestMethod: string  | undefined) {
        this['request_method'] = requestMethod;
    }
    public get requestMethod(): string | undefined {
        return this['request_method'];
    }
    public withResponseCode(responseCode: string): OpenApiCalledRecord {
        this['response_code'] = responseCode;
        return this;
    }
    public set responseCode(responseCode: string  | undefined) {
        this['response_code'] = responseCode;
    }
    public get responseCode(): string | undefined {
        return this['response_code'];
    }
    public withFailReason(failReason: string): OpenApiCalledRecord {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withTimestamp(timestamp: number): OpenApiCalledRecord {
        this['timestamp'] = timestamp;
        return this;
    }
}