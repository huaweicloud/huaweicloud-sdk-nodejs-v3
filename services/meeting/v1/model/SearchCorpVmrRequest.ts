

export class SearchCorpVmrRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public vmrMode?: number;
    public status?: number;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): SearchCorpVmrRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SearchCorpVmrRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): SearchCorpVmrRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchCorpVmrRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchCorpVmrRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withVmrMode(vmrMode: number): SearchCorpVmrRequest {
        this['vmrMode'] = vmrMode;
        return this;
    }
    public withStatus(status: number): SearchCorpVmrRequest {
        this['status'] = status;
        return this;
    }
}