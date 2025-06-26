

export class ListPublishedAppRequest {
    private 'app_group_id'?: string;
    public limit?: number;
    public offset?: number;
    public name?: string;
    public state?: string;
    private 'app_id'?: string;
    public constructor(appGroupId?: string) { 
        this['app_group_id'] = appGroupId;
    }
    public withAppGroupId(appGroupId: string): ListPublishedAppRequest {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withLimit(limit: number): ListPublishedAppRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPublishedAppRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ListPublishedAppRequest {
        this['name'] = name;
        return this;
    }
    public withState(state: string): ListPublishedAppRequest {
        this['state'] = state;
        return this;
    }
    public withAppId(appId: string): ListPublishedAppRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}