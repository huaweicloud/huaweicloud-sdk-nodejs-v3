

export class ListHistoryWebinarsRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public sortType?: string;
    public startTime?: string;
    public endTime?: string;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): ListHistoryWebinarsRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): ListHistoryWebinarsRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): ListHistoryWebinarsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHistoryWebinarsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): ListHistoryWebinarsRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withSortType(sortType: string): ListHistoryWebinarsRequest {
        this['sortType'] = sortType;
        return this;
    }
    public withStartTime(startTime: string): ListHistoryWebinarsRequest {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: string): ListHistoryWebinarsRequest {
        this['endTime'] = endTime;
        return this;
    }
}