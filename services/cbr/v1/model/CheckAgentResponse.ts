import { ProtectableAgentStatus } from './ProtectableAgentStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckAgentResponse extends SdkResponse {
    private 'agent_status'?: Array<ProtectableAgentStatus>;
    public constructor() { 
        super();
    }
    public withAgentStatus(agentStatus: Array<ProtectableAgentStatus>): CheckAgentResponse {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: Array<ProtectableAgentStatus>  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): Array<ProtectableAgentStatus> | undefined {
        return this['agent_status'];
    }
}