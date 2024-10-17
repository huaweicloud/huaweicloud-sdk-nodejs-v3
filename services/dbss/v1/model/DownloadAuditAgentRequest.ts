

export class DownloadAuditAgentRequest {
    private 'instance_id'?: string;
    private 'agent_id'?: string;
    public constructor(instanceId?: string, agentId?: string) { 
        this['instance_id'] = instanceId;
        this['agent_id'] = agentId;
    }
    public withInstanceId(instanceId: string): DownloadAuditAgentRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAgentId(agentId: string): DownloadAuditAgentRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
}