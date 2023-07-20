import { ModResourceDTO } from './ModResourceDTO';


export class UpdateResourceRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    private 'corp_id'?: string;
    public body?: Array<ModResourceDTO>;
    public constructor(corpId?: string) { 
        this['corp_id'] = corpId;
    }
    public withXRequestId(xRequestId: string): UpdateResourceRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): UpdateResourceRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withCorpId(corpId: string): UpdateResourceRequest {
        this['corp_id'] = corpId;
        return this;
    }
    public set corpId(corpId: string  | undefined) {
        this['corp_id'] = corpId;
    }
    public get corpId(): string | undefined {
        return this['corp_id'];
    }
    public withBody(body: Array<ModResourceDTO>): UpdateResourceRequest {
        this['body'] = body;
        return this;
    }
}