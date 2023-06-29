import { AuthorizeConfigInfoRequestBody } from './AuthorizeConfigInfoRequestBody';


export class SetSsoConfigRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public body?: AuthorizeConfigInfoRequestBody;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): SetSsoConfigRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SetSsoConfigRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withBody(body: AuthorizeConfigInfoRequestBody): SetSsoConfigRequest {
        this['body'] = body;
        return this;
    }
}