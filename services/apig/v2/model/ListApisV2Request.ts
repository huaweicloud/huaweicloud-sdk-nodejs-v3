

export class ListApisV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public id?: string;
    public name?: string;
    private 'group_id'?: string;
    private 'req_protocol'?: string;
    private 'req_method'?: string;
    private 'req_uri'?: string;
    private 'auth_type'?: string;
    private 'env_id'?: string;
    public type?: number;
    private 'precise_search'?: string;
    private 'vpc_channel_name'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListApisV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListApisV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApisV2Request {
        this['limit'] = limit;
        return this;
    }
    public withId(id: string): ListApisV2Request {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListApisV2Request {
        this['name'] = name;
        return this;
    }
    public withGroupId(groupId: string): ListApisV2Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withReqProtocol(reqProtocol: string): ListApisV2Request {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: string): ListApisV2Request {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ListApisV2Request {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withAuthType(authType: string): ListApisV2Request {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withEnvId(envId: string): ListApisV2Request {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withType(type: number): ListApisV2Request {
        this['type'] = type;
        return this;
    }
    public withPreciseSearch(preciseSearch: string): ListApisV2Request {
        this['precise_search'] = preciseSearch;
        return this;
    }
    public set preciseSearch(preciseSearch: string  | undefined) {
        this['precise_search'] = preciseSearch;
    }
    public get preciseSearch(): string | undefined {
        return this['precise_search'];
    }
    public withVpcChannelName(vpcChannelName: string): ListApisV2Request {
        this['vpc_channel_name'] = vpcChannelName;
        return this;
    }
    public set vpcChannelName(vpcChannelName: string  | undefined) {
        this['vpc_channel_name'] = vpcChannelName;
    }
    public get vpcChannelName(): string | undefined {
        return this['vpc_channel_name'];
    }
}