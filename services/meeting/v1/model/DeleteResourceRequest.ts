

export class DeleteResourceRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    private 'corp_id': string | undefined;
    public body?: Array<string>;
    public constructor(corpId?: any) { 
        this['corp_id'] = corpId;
    }
    public withXRequestId(xRequestId: string): DeleteResourceRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): DeleteResourceRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withCorpId(corpId: string): DeleteResourceRequest {
        this['corp_id'] = corpId;
        return this;
    }
    public set corpId(corpId: string | undefined) {
        this['corp_id'] = corpId;
    }
    public get corpId() {
        return this['corp_id'];
    }
    public withBody(body: Array<string>): DeleteResourceRequest {
        this['body'] = body;
        return this;
    }
}