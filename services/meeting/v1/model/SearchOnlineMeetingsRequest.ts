

export class SearchOnlineMeetingsRequest {
    public userUUID?: string;
    public offset?: number;
    public limit?: number;
    public queryAll?: boolean;
    public searchKey?: string;
    private 'X-Authorization-Type'?: string | undefined;
    private 'X-Site-Id'?: string | undefined;
    public constructor() { 
    }
    public withUserUUID(userUUID: string): SearchOnlineMeetingsRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withOffset(offset: number): SearchOnlineMeetingsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchOnlineMeetingsRequest {
        this['limit'] = limit;
        return this;
    }
    public withQueryAll(queryAll: boolean): SearchOnlineMeetingsRequest {
        this['queryAll'] = queryAll;
        return this;
    }
    public withSearchKey(searchKey: string): SearchOnlineMeetingsRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withXAuthorizationType(xAuthorizationType: string): SearchOnlineMeetingsRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType() {
        return this['X-Authorization-Type'];
    }
    public withXSiteId(xSiteId: string): SearchOnlineMeetingsRequest {
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