import { ProtectableAgentStatusResource } from './ProtectableAgentStatusResource';


export class ProtectableAgentReq {
    private 'agent_status': Array<ProtectableAgentStatusResource> | undefined;
    public constructor(agentStatus?: any) { 
        this['agent_status'] = agentStatus;
    }
    public withAgentStatus(agentStatus: Array<ProtectableAgentStatusResource>): ProtectableAgentReq {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: Array<ProtectableAgentStatusResource> | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus() {
        return this['agent_status'];
    }
}