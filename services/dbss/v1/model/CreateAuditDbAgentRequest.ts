import { AgentEditRequest } from './AgentEditRequest';


export class CreateAuditDbAgentRequest {
    private 'instance_id'?: string;
    private 'agent_id'?: string;
    public body?: AgentEditRequest;
    public constructor(instanceId?: string, agentId?: string) { 
        this['instance_id'] = instanceId;
        this['agent_id'] = agentId;
    }
    public withInstanceId(instanceId: string): CreateAuditDbAgentRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAgentId(agentId: string): CreateAuditDbAgentRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withBody(body: AgentEditRequest): CreateAuditDbAgentRequest {
        this['body'] = body;
        return this;
    }
}