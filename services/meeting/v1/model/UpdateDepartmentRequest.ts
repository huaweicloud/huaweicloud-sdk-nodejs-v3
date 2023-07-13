import { ModDeptDTO } from './ModDeptDTO';


export class UpdateDepartmentRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    private 'dept_code': string | undefined;
    public body?: ModDeptDTO;
    public constructor(deptCode?: any) { 
        this['dept_code'] = deptCode;
    }
    public withXRequestId(xRequestId: string): UpdateDepartmentRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): UpdateDepartmentRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withDeptCode(deptCode: string): UpdateDepartmentRequest {
        this['dept_code'] = deptCode;
        return this;
    }
    public set deptCode(deptCode: string | undefined) {
        this['dept_code'] = deptCode;
    }
    public get deptCode() {
        return this['dept_code'];
    }
    public withBody(body: ModDeptDTO): UpdateDepartmentRequest {
        this['body'] = body;
        return this;
    }
}