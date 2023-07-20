import { ModMemberDTO } from './ModMemberDTO';


export class UpdateMyInfoRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public body?: ModMemberDTO;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): UpdateMyInfoRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): UpdateMyInfoRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withBody(body: ModMemberDTO): UpdateMyInfoRequest {
        this['body'] = body;
        return this;
    }
}