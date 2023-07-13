import { AdminResetPwdReqDTO } from './AdminResetPwdReqDTO';


export class ResetPwdByAdminRequest {
    private 'X-Request-ID'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public body?: AdminResetPwdReqDTO;
    public constructor() { 
    }
    public withXRequestID(xRequestID: string): ResetPwdByAdminRequest {
        this['X-Request-ID'] = xRequestID;
        return this;
    }
    public set xRequestID(xRequestID: string | undefined) {
        this['X-Request-ID'] = xRequestID;
    }
    public get xRequestID() {
        return this['X-Request-ID'];
    }
    public withAcceptLanguage(acceptLanguage: string): ResetPwdByAdminRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withBody(body: AdminResetPwdReqDTO): ResetPwdByAdminRequest {
        this['body'] = body;
        return this;
    }
}