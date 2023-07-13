import { ActiveDTO } from './ActiveDTO';


export class ResetVisionActiveCodeRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public account: string;
    public body?: ActiveDTO;
    public constructor(account?: any) { 
        this['account'] = account;
    }
    public withXRequestId(xRequestId: string): ResetVisionActiveCodeRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): ResetVisionActiveCodeRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withAccount(account: string): ResetVisionActiveCodeRequest {
        this['account'] = account;
        return this;
    }
    public withBody(body: ActiveDTO): ResetVisionActiveCodeRequest {
        this['body'] = body;
        return this;
    }
}