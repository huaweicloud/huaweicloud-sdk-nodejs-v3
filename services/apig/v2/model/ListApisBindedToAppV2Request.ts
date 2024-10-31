

export class ListApisBindedToAppV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'app_id'?: string;
    private 'api_id'?: string;
    private 'api_name'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'env_id'?: string;
    public tags?: string;
    public constructor(instanceId?: string, appId?: string) { 
        this['instance_id'] = instanceId;
        this['app_id'] = appId;
    }
    public withInstanceId(instanceId: string): ListApisBindedToAppV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListApisBindedToAppV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApisBindedToAppV2Request {
        this['limit'] = limit;
        return this;
    }
    public withAppId(appId: string): ListApisBindedToAppV2Request {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withApiId(apiId: string): ListApisBindedToAppV2Request {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): ListApisBindedToAppV2Request {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withGroupId(groupId: string): ListApisBindedToAppV2Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): ListApisBindedToAppV2Request {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withEnvId(envId: string): ListApisBindedToAppV2Request {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withTags(tags: string): ListApisBindedToAppV2Request {
        this['tags'] = tags;
        return this;
    }
}