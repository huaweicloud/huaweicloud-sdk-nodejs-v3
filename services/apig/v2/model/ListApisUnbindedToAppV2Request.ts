

export class ListApisUnbindedToAppV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'app_id'?: string;
    private 'env_id'?: string;
    private 'group_id'?: string;
    private 'api_id'?: string;
    private 'api_name'?: string;
    public constructor(instanceId?: string, appId?: string, envId?: string) { 
        this['instance_id'] = instanceId;
        this['app_id'] = appId;
        this['env_id'] = envId;
    }
    public withInstanceId(instanceId: string): ListApisUnbindedToAppV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListApisUnbindedToAppV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApisUnbindedToAppV2Request {
        this['limit'] = limit;
        return this;
    }
    public withAppId(appId: string): ListApisUnbindedToAppV2Request {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withEnvId(envId: string): ListApisUnbindedToAppV2Request {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withGroupId(groupId: string): ListApisUnbindedToAppV2Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withApiId(apiId: string): ListApisUnbindedToAppV2Request {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): ListApisUnbindedToAppV2Request {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
}