

export class SearchDepartmentByNameRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public deptName: string;
    public constructor(deptName?: any) { 
        this['deptName'] = deptName;
    }
    public withXRequestId(xRequestId: string): SearchDepartmentByNameRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SearchDepartmentByNameRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withDeptName(deptName: string): SearchDepartmentByNameRequest {
        this['deptName'] = deptName;
        return this;
    }
}