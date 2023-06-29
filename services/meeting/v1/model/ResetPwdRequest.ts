import { ResetPwdReqDTOV1 } from './ResetPwdReqDTOV1';


export class ResetPwdRequest {
    private 'X-Request-ID'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public body?: ResetPwdReqDTOV1;
    public constructor() { 
    }
    public withXRequestID(xRequestID: string): ResetPwdRequest {
        this['X-Request-ID'] = xRequestID;
        return this;
    }
    public set xRequestID(xRequestID: string | undefined) {
        this['X-Request-ID'] = xRequestID;
    }
    public get xRequestID() {
        return this['X-Request-ID'];
    }
    public withAcceptLanguage(acceptLanguage: string): ResetPwdRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withBody(body: ResetPwdReqDTOV1): ResetPwdRequest {
        this['body'] = body;
        return this;
    }
}