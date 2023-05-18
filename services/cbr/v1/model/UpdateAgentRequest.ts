import { AgentUpdateReq } from './AgentUpdateReq';


export class UpdateAgentRequest {
    private 'agent_id': string | undefined;
    public body?: AgentUpdateReq;
    public constructor(agentId?: any) { 
        this['agent_id'] = agentId;
    }
    public withAgentId(agentId: string): UpdateAgentRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId() {
        return this['agent_id'];
    }
    public withBody(body: AgentUpdateReq): UpdateAgentRequest {
        this['body'] = body;
        return this;
    }
}