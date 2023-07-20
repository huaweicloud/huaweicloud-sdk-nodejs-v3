

export class ShowPublicationRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withXRequestId(xRequestId: string): ShowPublicationRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): ShowPublicationRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withId(id: string): ShowPublicationRequest {
        this['id'] = id;
        return this;
    }
}