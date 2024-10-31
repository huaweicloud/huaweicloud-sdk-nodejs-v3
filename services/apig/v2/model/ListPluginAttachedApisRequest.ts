

export class ListPluginAttachedApisRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'plugin_id'?: string;
    private 'env_id'?: string;
    private 'api_name'?: string;
    private 'api_id'?: string;
    private 'group_id'?: string;
    private 'req_method'?: string;
    private 'req_uri'?: string;
    public tags?: string;
    public constructor(instanceId?: string, pluginId?: string) { 
        this['instance_id'] = instanceId;
        this['plugin_id'] = pluginId;
    }
    public withInstanceId(instanceId: string): ListPluginAttachedApisRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListPluginAttachedApisRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPluginAttachedApisRequest {
        this['limit'] = limit;
        return this;
    }
    public withPluginId(pluginId: string): ListPluginAttachedApisRequest {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
    public withEnvId(envId: string): ListPluginAttachedApisRequest {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withApiName(apiName: string): ListPluginAttachedApisRequest {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withApiId(apiId: string): ListPluginAttachedApisRequest {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withGroupId(groupId: string): ListPluginAttachedApisRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withReqMethod(reqMethod: string): ListPluginAttachedApisRequest {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ListPluginAttachedApisRequest {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withTags(tags: string): ListPluginAttachedApisRequest {
        this['tags'] = tags;
        return this;
    }
}