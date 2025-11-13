

export class ListReplicationProfilesRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'agent_type'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ListReplicationProfilesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListReplicationProfilesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAgentType(agentType: string): ListReplicationProfilesRequest {
        this['agent_type'] = agentType;
        return this;
    }
    public set agentType(agentType: string  | undefined) {
        this['agent_type'] = agentType;
    }
    public get agentType(): string | undefined {
        return this['agent_type'];
    }
    public withOffset(offset: number): ListReplicationProfilesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListReplicationProfilesRequest {
        this['limit'] = limit;
        return this;
    }
}