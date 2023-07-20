import { DeptDTO } from './DeptDTO';


export class AddDepartmentRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public body?: DeptDTO;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): AddDepartmentRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): AddDepartmentRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withBody(body: DeptDTO): AddDepartmentRequest {
        this['body'] = body;
        return this;
    }
}