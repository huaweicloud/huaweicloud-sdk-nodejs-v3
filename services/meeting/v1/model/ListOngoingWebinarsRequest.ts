

export class ListOngoingWebinarsRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public sortType?: string;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): ListOngoingWebinarsRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): ListOngoingWebinarsRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): ListOngoingWebinarsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListOngoingWebinarsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): ListOngoingWebinarsRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withSortType(sortType: string): ListOngoingWebinarsRequest {
        this['sortType'] = sortType;
        return this;
    }
}