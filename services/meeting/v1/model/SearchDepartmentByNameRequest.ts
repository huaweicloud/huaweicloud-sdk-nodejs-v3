

export class SearchDepartmentByNameRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public deptName?: string;
    public constructor(deptName?: string) { 
        this['deptName'] = deptName;
    }
    public withXRequestId(xRequestId: string): SearchDepartmentByNameRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SearchDepartmentByNameRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withDeptName(deptName: string): SearchDepartmentByNameRequest {
        this['deptName'] = deptName;
        return this;
    }
}