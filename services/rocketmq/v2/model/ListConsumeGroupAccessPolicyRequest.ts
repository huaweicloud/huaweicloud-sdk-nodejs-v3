

export class ListConsumeGroupAccessPolicyRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public group?: string;
    public offset?: number;
    public limit?: number;
    public constructor(engine?: string, instanceId?: string, group?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withEngine(engine: string): ListConsumeGroupAccessPolicyRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ListConsumeGroupAccessPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): ListConsumeGroupAccessPolicyRequest {
        this['group'] = group;
        return this;
    }
    public withOffset(offset: number): ListConsumeGroupAccessPolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListConsumeGroupAccessPolicyRequest {
        this['limit'] = limit;
        return this;
    }
}