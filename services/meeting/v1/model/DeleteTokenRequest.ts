

export class DeleteTokenRequest {
    private 'X-Request-ID'?: string;
    private 'Accept-Language'?: string;
    public constructor() { 
    }
    public withXRequestID(xRequestID: string): DeleteTokenRequest {
        this['X-Request-ID'] = xRequestID;
        return this;
    }
    public set xRequestID(xRequestID: string  | undefined) {
        this['X-Request-ID'] = xRequestID;
    }
    public get xRequestID(): string | undefined {
        return this['X-Request-ID'];
    }
    public withAcceptLanguage(acceptLanguage: string): DeleteTokenRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
}