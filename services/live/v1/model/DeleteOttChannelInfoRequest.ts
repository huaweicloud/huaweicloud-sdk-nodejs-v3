

export class DeleteOttChannelInfoRequest {
    private 'Access-Control-Allow-Internal'?: string;
    private 'Access-Control-Allow-External'?: string;
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    public constructor(domain?: string, appName?: string, id?: string) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['id'] = id;
    }
    public withAccessControlAllowInternal(accessControlAllowInternal: string): DeleteOttChannelInfoRequest {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
        return this;
    }
    public set accessControlAllowInternal(accessControlAllowInternal: string  | undefined) {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
    }
    public get accessControlAllowInternal(): string | undefined {
        return this['Access-Control-Allow-Internal'];
    }
    public withAccessControlAllowExternal(accessControlAllowExternal: string): DeleteOttChannelInfoRequest {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
        return this;
    }
    public set accessControlAllowExternal(accessControlAllowExternal: string  | undefined) {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
    }
    public get accessControlAllowExternal(): string | undefined {
        return this['Access-Control-Allow-External'];
    }
    public withDomain(domain: string): DeleteOttChannelInfoRequest {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): DeleteOttChannelInfoRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): DeleteOttChannelInfoRequest {
        this['id'] = id;
        return this;
    }
}