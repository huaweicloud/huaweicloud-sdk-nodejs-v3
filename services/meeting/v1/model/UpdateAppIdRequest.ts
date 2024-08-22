import { UpdateAppIdRequestBody } from './UpdateAppIdRequestBody';


export class UpdateAppIdRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    private 'app_id'?: string;
    public body?: UpdateAppIdRequestBody;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withXRequestId(xRequestId: string): UpdateAppIdRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): UpdateAppIdRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withAppId(appId: string): UpdateAppIdRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBody(body: UpdateAppIdRequestBody): UpdateAppIdRequest {
        this['body'] = body;
        return this;
    }
}