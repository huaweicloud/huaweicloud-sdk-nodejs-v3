import { AgentRemovePathReq } from './AgentRemovePathReq';


export class RemoveAgentPathRequest {
    private 'agent_id': string | undefined;
    public body?: AgentRemovePathReq;
    public constructor(agentId?: any) { 
        this['agent_id'] = agentId;
    }
    public withAgentId(agentId: string): RemoveAgentPathRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId() {
        return this['agent_id'];
    }
    public withBody(body: AgentRemovePathReq): RemoveAgentPathRequest {
        this['body'] = body;
        return this;
    }
}