import { AuditAgentRespoonseAgents } from './AuditAgentRespoonseAgents';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditAgentResponse extends SdkResponse {
    public agents?: Array<AuditAgentRespoonseAgents>;
    public constructor() { 
        super();
    }
    public withAgents(agents: Array<AuditAgentRespoonseAgents>): ListAuditAgentResponse {
        this['agents'] = agents;
        return this;
    }
}