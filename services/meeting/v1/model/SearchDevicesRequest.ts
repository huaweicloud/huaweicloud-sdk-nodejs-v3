

export class SearchDevicesRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public model?: string;
    public deptCode?: string;
    public enableSubDept?: boolean;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): SearchDevicesRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SearchDevicesRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): SearchDevicesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchDevicesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchDevicesRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withModel(model: string): SearchDevicesRequest {
        this['model'] = model;
        return this;
    }
    public withDeptCode(deptCode: string): SearchDevicesRequest {
        this['deptCode'] = deptCode;
        return this;
    }
    public withEnableSubDept(enableSubDept: boolean): SearchDevicesRequest {
        this['enableSubDept'] = enableSubDept;
        return this;
    }
}