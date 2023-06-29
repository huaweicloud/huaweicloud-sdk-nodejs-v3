import { ShowUserRequestDTO } from './ShowUserRequestDTO';


export class BatchShowUserDetailsRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public idType?: string;
    public body?: Array<ShowUserRequestDTO>;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): BatchShowUserDetailsRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): BatchShowUserDetailsRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withIdType(idType: string): BatchShowUserDetailsRequest {
        this['idType'] = idType;
        return this;
    }
    public withBody(body: Array<ShowUserRequestDTO>): BatchShowUserDetailsRequest {
        this['body'] = body;
        return this;
    }
}