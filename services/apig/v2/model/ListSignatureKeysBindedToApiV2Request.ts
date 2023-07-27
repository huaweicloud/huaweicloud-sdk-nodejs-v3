

export class ListSignatureKeysBindedToApiV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'api_id'?: string;
    private 'sign_id'?: string;
    private 'sign_name'?: string;
    private 'env_id'?: string;
    public constructor(instanceId?: string, apiId?: string) { 
        this['instance_id'] = instanceId;
        this['api_id'] = apiId;
    }
    public withInstanceId(instanceId: string): ListSignatureKeysBindedToApiV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListSignatureKeysBindedToApiV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSignatureKeysBindedToApiV2Request {
        this['limit'] = limit;
        return this;
    }
    public withApiId(apiId: string): ListSignatureKeysBindedToApiV2Request {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withSignId(signId: string): ListSignatureKeysBindedToApiV2Request {
        this['sign_id'] = signId;
        return this;
    }
    public set signId(signId: string  | undefined) {
        this['sign_id'] = signId;
    }
    public get signId(): string | undefined {
        return this['sign_id'];
    }
    public withSignName(signName: string): ListSignatureKeysBindedToApiV2Request {
        this['sign_name'] = signName;
        return this;
    }
    public set signName(signName: string  | undefined) {
        this['sign_name'] = signName;
    }
    public get signName(): string | undefined {
        return this['sign_name'];
    }
    public withEnvId(envId: string): ListSignatureKeysBindedToApiV2Request {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
}