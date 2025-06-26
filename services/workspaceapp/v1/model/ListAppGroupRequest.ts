

export class ListAppGroupRequest {
    public limit?: number;
    public offset?: number;
    private 'app_server_group_id'?: string;
    private 'app_group_id'?: string;
    public name?: string;
    private 'authorization_type'?: string;
    private 'app_type'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListAppGroupRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAppGroupRequest {
        this['offset'] = offset;
        return this;
    }
    public withAppServerGroupId(appServerGroupId: string): ListAppGroupRequest {
        this['app_server_group_id'] = appServerGroupId;
        return this;
    }
    public set appServerGroupId(appServerGroupId: string  | undefined) {
        this['app_server_group_id'] = appServerGroupId;
    }
    public get appServerGroupId(): string | undefined {
        return this['app_server_group_id'];
    }
    public withAppGroupId(appGroupId: string): ListAppGroupRequest {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withName(name: string): ListAppGroupRequest {
        this['name'] = name;
        return this;
    }
    public withAuthorizationType(authorizationType: string): ListAppGroupRequest {
        this['authorization_type'] = authorizationType;
        return this;
    }
    public set authorizationType(authorizationType: string  | undefined) {
        this['authorization_type'] = authorizationType;
    }
    public get authorizationType(): string | undefined {
        return this['authorization_type'];
    }
    public withAppType(appType: string): ListAppGroupRequest {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
}