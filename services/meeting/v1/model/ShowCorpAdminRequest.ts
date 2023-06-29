

export class ShowCorpAdminRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public account: string;
    public accountType?: number;
    public constructor(account?: any) { 
        this['account'] = account;
    }
    public withXRequestId(xRequestId: string): ShowCorpAdminRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): ShowCorpAdminRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withAccount(account: string): ShowCorpAdminRequest {
        this['account'] = account;
        return this;
    }
    public withAccountType(accountType: number): ShowCorpAdminRequest {
        this['accountType'] = accountType;
        return this;
    }
}