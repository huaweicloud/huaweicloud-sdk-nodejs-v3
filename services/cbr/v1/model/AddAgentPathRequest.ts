import { AgentAddPathReq } from './AgentAddPathReq';


export class AddAgentPathRequest {
    private 'agent_id'?: string;
    public body?: AgentAddPathReq;
    public constructor(agentId?: string) { 
        this['agent_id'] = agentId;
    }
    public withAgentId(agentId: string): AddAgentPathRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withBody(body: AgentAddPathReq): AddAgentPathRequest {
        this['body'] = body;
        return this;
    }
}