import { ValidateTokenReqDTO } from './ValidateTokenReqDTO';


export class CheckTokenRequest {
    private 'X-Request-ID'?: string;
    private 'Accept-Language'?: string;
    public body?: ValidateTokenReqDTO;
    public constructor() { 
    }
    public withXRequestID(xRequestID: string): CheckTokenRequest {
        this['X-Request-ID'] = xRequestID;
        return this;
    }
    public set xRequestID(xRequestID: string  | undefined) {
        this['X-Request-ID'] = xRequestID;
    }
    public get xRequestID(): string | undefined {
        return this['X-Request-ID'];
    }
    public withAcceptLanguage(acceptLanguage: string): CheckTokenRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withBody(body: ValidateTokenReqDTO): CheckTokenRequest {
        this['body'] = body;
        return this;
    }
}