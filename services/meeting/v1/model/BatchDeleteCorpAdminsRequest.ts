

export class BatchDeleteCorpAdminsRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public accountType?: number;
    public body?: Array<string>;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): BatchDeleteCorpAdminsRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): BatchDeleteCorpAdminsRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withAccountType(accountType: number): BatchDeleteCorpAdminsRequest {
        this['accountType'] = accountType;
        return this;
    }
    public withBody(body: Array<string>): BatchDeleteCorpAdminsRequest {
        this['body'] = body;
        return this;
    }
}