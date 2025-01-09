

export class ListUserGroupsRequest {
    public limit?: string;
    public offset?: string;
    public keyword?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListUserGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListUserGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withKeyword(keyword: string): ListUserGroupsRequest {
        this['keyword'] = keyword;
        return this;
    }
}