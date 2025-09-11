import { AuditAgentRespoonseAgents } from './AuditAgentRespoonseAgents';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditAgentNewResponse extends SdkResponse {
    public agents?: Array<AuditAgentRespoonseAgents>;
    public constructor() { 
        super();
    }
    public withAgents(agents: Array<AuditAgentRespoonseAgents>): ListAuditAgentNewResponse {
        this['agents'] = agents;
        return this;
    }
}