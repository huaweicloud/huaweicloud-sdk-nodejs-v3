import { SlideVerifyCodeCheckDTO } from './SlideVerifyCodeCheckDTO';


export class CheckSlideVerifyCodeRequest {
    private 'X-Request-ID'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public body?: SlideVerifyCodeCheckDTO;
    public constructor() { 
    }
    public withXRequestID(xRequestID: string): CheckSlideVerifyCodeRequest {
        this['X-Request-ID'] = xRequestID;
        return this;
    }
    public set xRequestID(xRequestID: string | undefined) {
        this['X-Request-ID'] = xRequestID;
    }
    public get xRequestID() {
        return this['X-Request-ID'];
    }
    public withAcceptLanguage(acceptLanguage: string): CheckSlideVerifyCodeRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withBody(body: SlideVerifyCodeCheckDTO): CheckSlideVerifyCodeRequest {
        this['body'] = body;
        return this;
    }
}