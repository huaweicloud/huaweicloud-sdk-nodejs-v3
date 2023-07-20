

export class SearchRecordingsRequest {
    public userUUID?: string;
    public offset?: number;
    public limit?: number;
    public queryAll?: boolean;
    public searchKey?: string;
    public startDate?: number;
    public endDate?: number;
    public sortType?: string;
    private 'X-Authorization-Type'?: string;
    private 'X-Site-Id'?: string;
    public constructor(startDate?: number, endDate?: number) { 
        this['startDate'] = startDate;
        this['endDate'] = endDate;
    }
    public withUserUUID(userUUID: string): SearchRecordingsRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withOffset(offset: number): SearchRecordingsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchRecordingsRequest {
        this['limit'] = limit;
        return this;
    }
    public withQueryAll(queryAll: boolean): SearchRecordingsRequest {
        this['queryAll'] = queryAll;
        return this;
    }
    public withSearchKey(searchKey: string): SearchRecordingsRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withStartDate(startDate: number): SearchRecordingsRequest {
        this['startDate'] = startDate;
        return this;
    }
    public withEndDate(endDate: number): SearchRecordingsRequest {
        this['endDate'] = endDate;
        return this;
    }
    public withSortType(sortType: string): SearchRecordingsRequest {
        this['sortType'] = sortType;
        return this;
    }
    public withXAuthorizationType(xAuthorizationType: string): SearchRecordingsRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string  | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType(): string | undefined {
        return this['X-Authorization-Type'];
    }
    public withXSiteId(xSiteId: string): SearchRecordingsRequest {
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