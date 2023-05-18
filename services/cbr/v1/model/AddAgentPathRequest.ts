import { AgentAddPathReq } from './AgentAddPathReq';


export class AddAgentPathRequest {
    private 'agent_id': string | undefined;
    public body?: AgentAddPathReq;
    public constructor(agentId?: any) { 
        this['agent_id'] = agentId;
    }
    public withAgentId(agentId: string): AddAgentPathRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId() {
        return this['agent_id'];
    }
    public withBody(body: AgentAddPathReq): AddAgentPathRequest {
        this['body'] = body;
        return this;
    }
}