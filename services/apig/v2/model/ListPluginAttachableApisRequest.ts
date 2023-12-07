

export class ListPluginAttachableApisRequest {
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
    public constructor(instanceId?: string, pluginId?: string, envId?: string) { 
        this['instance_id'] = instanceId;
        this['plugin_id'] = pluginId;
        this['env_id'] = envId;
    }
    public withInstanceId(instanceId: string): ListPluginAttachableApisRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListPluginAttachableApisRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPluginAttachableApisRequest {
        this['limit'] = limit;
        return this;
    }
    public withPluginId(pluginId: string): ListPluginAttachableApisRequest {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
    public withEnvId(envId: string): ListPluginAttachableApisRequest {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withApiName(apiName: string): ListPluginAttachableApisRequest {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withApiId(apiId: string): ListPluginAttachableApisRequest {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withGroupId(groupId: string): ListPluginAttachableApisRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withReqMethod(reqMethod: string): ListPluginAttachableApisRequest {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ListPluginAttachableApisRequest {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
}