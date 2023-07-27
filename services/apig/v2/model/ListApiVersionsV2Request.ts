

export class ListApiVersionsV2Request {
    private 'instance_id'?: string;
    private 'api_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'env_id'?: string;
    private 'env_name'?: string;
    public constructor(instanceId?: string, apiId?: string) { 
        this['instance_id'] = instanceId;
        this['api_id'] = apiId;
    }
    public withInstanceId(instanceId: string): ListApiVersionsV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withApiId(apiId: string): ListApiVersionsV2Request {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withOffset(offset: number): ListApiVersionsV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApiVersionsV2Request {
        this['limit'] = limit;
        return this;
    }
    public withEnvId(envId: string): ListApiVersionsV2Request {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withEnvName(envName: string): ListApiVersionsV2Request {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
}