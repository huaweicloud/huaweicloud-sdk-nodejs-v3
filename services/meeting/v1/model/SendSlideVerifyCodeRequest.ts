import { SlideVerifyCodeSendDTO } from './SlideVerifyCodeSendDTO';


export class SendSlideVerifyCodeRequest {
    private 'X-Request-ID'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public body?: SlideVerifyCodeSendDTO;
    public constructor() { 
    }
    public withXRequestID(xRequestID: string): SendSlideVerifyCodeRequest {
        this['X-Request-ID'] = xRequestID;
        return this;
    }
    public set xRequestID(xRequestID: string | undefined) {
        this['X-Request-ID'] = xRequestID;
    }
    public get xRequestID() {
        return this['X-Request-ID'];
    }
    public withAcceptLanguage(acceptLanguage: string): SendSlideVerifyCodeRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withBody(body: SlideVerifyCodeSendDTO): SendSlideVerifyCodeRequest {
        this['body'] = body;
        return this;
    }
}