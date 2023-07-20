import { VerifyCodeSendDTOV1 } from './VerifyCodeSendDTOV1';


export class SendVeriCodeForChangePwdRequest {
    private 'X-Request-ID'?: string;
    private 'Accept-Language'?: string;
    public body?: VerifyCodeSendDTOV1;
    public constructor() { 
    }
    public withXRequestID(xRequestID: string): SendVeriCodeForChangePwdRequest {
        this['X-Request-ID'] = xRequestID;
        return this;
    }
    public set xRequestID(xRequestID: string  | undefined) {
        this['X-Request-ID'] = xRequestID;
    }
    public get xRequestID(): string | undefined {
        return this['X-Request-ID'];
    }
    public withAcceptLanguage(acceptLanguage: string): SendVeriCodeForChangePwdRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withBody(body: VerifyCodeSendDTOV1): SendVeriCodeForChangePwdRequest {
        this['body'] = body;
        return this;
    }
}