

export class SearchHisMeetingsRequest {
    public userUUID?: string;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public queryAll?: boolean;
    public startDate?: number;
    public endDate?: number;
    public sortType?: string;
    private 'X-Authorization-Type'?: string;
    private 'X-Site-Id'?: string;
    public constructor(startDate?: number, endDate?: number) { 
        this['startDate'] = startDate;
        this['endDate'] = endDate;
    }
    public withUserUUID(userUUID: string): SearchHisMeetingsRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withOffset(offset: number): SearchHisMeetingsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchHisMeetingsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchHisMeetingsRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withQueryAll(queryAll: boolean): SearchHisMeetingsRequest {
        this['queryAll'] = queryAll;
        return this;
    }
    public withStartDate(startDate: number): SearchHisMeetingsRequest {
        this['startDate'] = startDate;
        return this;
    }
    public withEndDate(endDate: number): SearchHisMeetingsRequest {
        this['endDate'] = endDate;
        return this;
    }
    public withSortType(sortType: string): SearchHisMeetingsRequest {
        this['sortType'] = sortType;
        return this;
    }
    public withXAuthorizationType(xAuthorizationType: string): SearchHisMeetingsRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string  | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType(): string | undefined {
        return this['X-Authorization-Type'];
    }
    public withXSiteId(xSiteId: string): SearchHisMeetingsRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string  | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId(): string | undefined {
        return this['X-Site-Id'];
    }
}