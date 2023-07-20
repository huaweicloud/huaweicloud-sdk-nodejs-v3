import { ProtectableAgentStatusResource } from './ProtectableAgentStatusResource';


export class ProtectableAgentReq {
    private 'agent_status'?: Array<ProtectableAgentStatusResource>;
    public constructor(agentStatus?: Array<ProtectableAgentStatusResource>) { 
        this['agent_status'] = agentStatus;
    }
    public withAgentStatus(agentStatus: Array<ProtectableAgentStatusResource>): ProtectableAgentReq {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: Array<ProtectableAgentStatusResource>  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): Array<ProtectableAgentStatusResource> | undefined {
        return this['agent_status'];
    }
}