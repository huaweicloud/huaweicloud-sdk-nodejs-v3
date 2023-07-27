

export class ListApisNotBoundWithSignatureKeyV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sign_id'?: string;
    private 'env_id'?: string;
    private 'api_id'?: string;
    private 'api_name'?: string;
    private 'group_id'?: string;
    public constructor(instanceId?: string, signId?: string) { 
        this['instance_id'] = instanceId;
        this['sign_id'] = signId;
    }
    public withInstanceId(instanceId: string): ListApisNotBoundWithSignatureKeyV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListApisNotBoundWithSignatureKeyV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApisNotBoundWithSignatureKeyV2Request {
        this['limit'] = limit;
        return this;
    }
    public withSignId(signId: string): ListApisNotBoundWithSignatureKeyV2Request {
        this['sign_id'] = signId;
        return this;
    }
    public set signId(signId: string  | undefined) {
        this['sign_id'] = signId;
    }
    public get signId(): string | undefined {
        return this['sign_id'];
    }
    public withEnvId(envId: string): ListApisNotBoundWithSignatureKeyV2Request {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withApiId(apiId: string): ListApisNotBoundWithSignatureKeyV2Request {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): ListApisNotBoundWithSignatureKeyV2Request {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withGroupId(groupId: string): ListApisNotBoundWithSignatureKeyV2Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}