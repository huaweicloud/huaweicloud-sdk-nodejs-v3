import { CorpAdminDTO } from './CorpAdminDTO';


export class AddCorpAdminRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public accountType?: number;
    public body?: CorpAdminDTO;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): AddCorpAdminRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): AddCorpAdminRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withAccountType(accountType: number): AddCorpAdminRequest {
        this['accountType'] = accountType;
        return this;
    }
    public withBody(body: CorpAdminDTO): AddCorpAdminRequest {
        this['body'] = body;
        return this;
    }
}