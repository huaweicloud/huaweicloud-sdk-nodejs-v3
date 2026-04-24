

export class ListUserGroupsRequest {
    public limit?: string;
    public offset?: string;
    public keyword?: string;
    public domain?: string;
    private 'platform_type'?: Array<string>;
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
    public withDomain(domain: string): ListUserGroupsRequest {
        this['domain'] = domain;
        return this;
    }
    public withPlatformType(platformType: Array<string>): ListUserGroupsRequest {
        this['platform_type'] = platformType;
        return this;
    }
    public set platformType(platformType: Array<string>  | undefined) {
        this['platform_type'] = platformType;
    }
    public get platformType(): Array<string> | undefined {
        return this['platform_type'];
    }
}