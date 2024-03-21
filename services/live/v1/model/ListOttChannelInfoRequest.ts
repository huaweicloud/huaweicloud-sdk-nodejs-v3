

export class ListOttChannelInfoRequest {
    private 'Access-Control-Allow-Internal'?: string;
    private 'Access-Control-Allow-External'?: string;
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withAccessControlAllowInternal(accessControlAllowInternal: string): ListOttChannelInfoRequest {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
        return this;
    }
    public set accessControlAllowInternal(accessControlAllowInternal: string  | undefined) {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
    }
    public get accessControlAllowInternal(): string | undefined {
        return this['Access-Control-Allow-Internal'];
    }
    public withAccessControlAllowExternal(accessControlAllowExternal: string): ListOttChannelInfoRequest {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
        return this;
    }
    public set accessControlAllowExternal(accessControlAllowExternal: string  | undefined) {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
    }
    public get accessControlAllowExternal(): string | undefined {
        return this['Access-Control-Allow-External'];
    }
    public withDomain(domain: string): ListOttChannelInfoRequest {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): ListOttChannelInfoRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): ListOttChannelInfoRequest {
        this['id'] = id;
        return this;
    }
    public withLimit(limit: number): ListOttChannelInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListOttChannelInfoRequest {
        this['offset'] = offset;
        return this;
    }
}