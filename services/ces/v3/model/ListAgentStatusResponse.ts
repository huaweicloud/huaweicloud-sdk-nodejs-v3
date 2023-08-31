import { AgentStatusInfo } from './AgentStatusInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgentStatusResponse extends SdkResponse {
    private 'agent_status'?: Array<AgentStatusInfo>;
    public constructor() { 
        super();
    }
    public withAgentStatus(agentStatus: Array<AgentStatusInfo>): ListAgentStatusResponse {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: Array<AgentStatusInfo>  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): Array<AgentStatusInfo> | undefined {
        return this['agent_status'];
    }
}