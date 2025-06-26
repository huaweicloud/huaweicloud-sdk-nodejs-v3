

export class UpdateAppGroupReq {
    public name?: string;
    private 'app_server_group_id'?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateAppGroupReq {
        this['name'] = name;
        return this;
    }
    public withAppServerGroupId(appServerGroupId: string): UpdateAppGroupReq {
        this['app_server_group_id'] = appServerGroupId;
        return this;
    }
    public set appServerGroupId(appServerGroupId: string  | undefined) {
        this['app_server_group_id'] = appServerGroupId;
    }
    public get appServerGroupId(): string | undefined {
        return this['app_server_group_id'];
    }
    public withDescription(description: string): UpdateAppGroupReq {
        this['description'] = description;
        return this;
    }
}