

export class SearchMeetingsRequest {
    public userUUID?: string;
    public offset?: number;
    public limit?: number;
    public queryAll?: boolean;
    public searchKey?: string;
    public queryConfMode?: string;
    public sortType?: string;
    private 'X-Authorization-Type'?: string | undefined;
    private 'X-Site-Id'?: string | undefined;
    public constructor() { 
    }
    public withUserUUID(userUUID: string): SearchMeetingsRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withOffset(offset: number): SearchMeetingsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchMeetingsRequest {
        this['limit'] = limit;
        return this;
    }
    public withQueryAll(queryAll: boolean): SearchMeetingsRequest {
        this['queryAll'] = queryAll;
        return this;
    }
    public withSearchKey(searchKey: string): SearchMeetingsRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withQueryConfMode(queryConfMode: string): SearchMeetingsRequest {
        this['queryConfMode'] = queryConfMode;
        return this;
    }
    public withSortType(sortType: string): SearchMeetingsRequest {
        this['sortType'] = sortType;
        return this;
    }
    public withXAuthorizationType(xAuthorizationType: string): SearchMeetingsRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType() {
        return this['X-Authorization-Type'];
    }
    public withXSiteId(xSiteId: string): SearchMeetingsRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId() {
        return this['X-Site-Id'];
    }
}