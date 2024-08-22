

export class BatchSearchAppIdRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): BatchSearchAppIdRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): BatchSearchAppIdRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): BatchSearchAppIdRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): BatchSearchAppIdRequest {
        this['limit'] = limit;
        return this;
    }
}