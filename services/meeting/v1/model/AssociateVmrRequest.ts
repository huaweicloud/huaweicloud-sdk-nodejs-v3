

export class AssociateVmrRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public account?: string;
    public accountType?: number;
    public body?: Array<string>;
    public constructor(account?: string) { 
        this['account'] = account;
    }
    public withXRequestId(xRequestId: string): AssociateVmrRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): AssociateVmrRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withAccount(account: string): AssociateVmrRequest {
        this['account'] = account;
        return this;
    }
    public withAccountType(accountType: number): AssociateVmrRequest {
        this['accountType'] = accountType;
        return this;
    }
    public withBody(body: Array<string>): AssociateVmrRequest {
        this['body'] = body;
        return this;
    }
}