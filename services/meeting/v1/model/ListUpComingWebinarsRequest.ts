

export class ListUpComingWebinarsRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public sortType?: string;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): ListUpComingWebinarsRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): ListUpComingWebinarsRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): ListUpComingWebinarsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListUpComingWebinarsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): ListUpComingWebinarsRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withSortType(sortType: string): ListUpComingWebinarsRequest {
        this['sortType'] = sortType;
        return this;
    }
}