

export class AddToPersonalSpaceRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public body?: { [key: string]: string; };
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): AddToPersonalSpaceRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): AddToPersonalSpaceRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withBody(body: { [key: string]: string; }): AddToPersonalSpaceRequest {
        this['body'] = body;
        return this;
    }
}