

export class DeleteAppIconRequest {
    private 'app_group_id'?: string;
    private 'app_id'?: string;
    public constructor(appGroupId?: string, appId?: string) { 
        this['app_group_id'] = appGroupId;
        this['app_id'] = appId;
    }
    public withAppGroupId(appGroupId: string): DeleteAppIconRequest {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withAppId(appId: string): DeleteAppIconRequest {
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