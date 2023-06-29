

export class UpdateTokenRequest {
    private 'X-Request-ID'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public constructor() { 
    }
    public withXRequestID(xRequestID: string): UpdateTokenRequest {
        this['X-Request-ID'] = xRequestID;
        return this;
    }
    public set xRequestID(xRequestID: string | undefined) {
        this['X-Request-ID'] = xRequestID;
    }
    public get xRequestID() {
        return this['X-Request-ID'];
    }
    public withAcceptLanguage(acceptLanguage: string): UpdateTokenRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
}