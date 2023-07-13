

export class SearchMemberVmrRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public specialVmr?: boolean;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): SearchMemberVmrRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SearchMemberVmrRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): SearchMemberVmrRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchMemberVmrRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchMemberVmrRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withSpecialVmr(specialVmr: boolean): SearchMemberVmrRequest {
        this['specialVmr'] = specialVmr;
        return this;
    }
}