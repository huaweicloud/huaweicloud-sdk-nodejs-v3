

export class DeleteCorpRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withXRequestId(xRequestId: string): DeleteCorpRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): DeleteCorpRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withId(id: string): DeleteCorpRequest {
        this['id'] = id;
        return this;
    }
}