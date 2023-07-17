

export class SearchMaterialsRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): SearchMaterialsRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SearchMaterialsRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): SearchMaterialsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchMaterialsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchMaterialsRequest {
        this['searchKey'] = searchKey;
        return this;
    }
}