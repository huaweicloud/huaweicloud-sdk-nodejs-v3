

export class DeleteAuditAgentNewRequest {
    private 'instance_id'?: string;
    private 'agent_id'?: string;
    private 'db_id'?: string;
    public constructor(instanceId?: string, agentId?: string, dbId?: string) { 
        this['instance_id'] = instanceId;
        this['agent_id'] = agentId;
        this['db_id'] = dbId;
    }
    public withInstanceId(instanceId: string): DeleteAuditAgentNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAgentId(agentId: string): DeleteAuditAgentNewRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withDbId(dbId: string): DeleteAuditAgentNewRequest {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
}