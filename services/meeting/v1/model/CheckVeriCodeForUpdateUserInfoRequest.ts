import { VerificationCodeDTO } from './VerificationCodeDTO';


export class CheckVeriCodeForUpdateUserInfoRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public body?: VerificationCodeDTO;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): CheckVeriCodeForUpdateUserInfoRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): CheckVeriCodeForUpdateUserInfoRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withBody(body: VerificationCodeDTO): CheckVeriCodeForUpdateUserInfoRequest {
        this['body'] = body;
        return this;
    }
}