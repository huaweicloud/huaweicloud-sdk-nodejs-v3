

export class ListConsumeGroupAccessPolicyForRocketMqRequest {
    private 'instance_id'?: string;
    public group?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, group?: string) { 
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withInstanceId(instanceId: string): ListConsumeGroupAccessPolicyForRocketMqRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): ListConsumeGroupAccessPolicyForRocketMqRequest {
        this['group'] = group;
        return this;
    }
    public withOffset(offset: number): ListConsumeGroupAccessPolicyForRocketMqRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListConsumeGroupAccessPolicyForRocketMqRequest {
        this['limit'] = limit;
        return this;
    }
}