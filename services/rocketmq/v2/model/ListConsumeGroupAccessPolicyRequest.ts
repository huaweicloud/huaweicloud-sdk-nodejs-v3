

export class ListConsumeGroupAccessPolicyRequest {
    public engine?: ListConsumeGroupAccessPolicyRequestEngineEnum | string;
    private 'instance_id'?: string;
    private 'group_id'?: string;
    public offset?: string;
    public limit?: string;
    public constructor(engine?: string, instanceId?: string, groupId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
    }
    public withEngine(engine: ListConsumeGroupAccessPolicyRequestEngineEnum | string): ListConsumeGroupAccessPolicyRequest {
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
    public withGroupId(groupId: string): ListConsumeGroupAccessPolicyRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withOffset(offset: string): ListConsumeGroupAccessPolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListConsumeGroupAccessPolicyRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListConsumeGroupAccessPolicyRequestEngineEnum {
    RELIABILITY = 'reliability'
}
