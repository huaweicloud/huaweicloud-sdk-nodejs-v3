

export class DeleteDepartmentRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    private 'dept_code'?: string;
    public constructor(deptCode?: string) { 
        this['dept_code'] = deptCode;
    }
    public withXRequestId(xRequestId: string): DeleteDepartmentRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): DeleteDepartmentRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withDeptCode(deptCode: string): DeleteDepartmentRequest {
        this['dept_code'] = deptCode;
        return this;
    }
    public set deptCode(deptCode: string  | undefined) {
        this['dept_code'] = deptCode;
    }
    public get deptCode(): string | undefined {
        return this['dept_code'];
    }
}