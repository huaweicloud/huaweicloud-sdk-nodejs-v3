import { Agent } from './Agent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgentResponse extends SdkResponse {
    public agents?: Array<Agent>;
    public count?: number;
    public limit?: number;
    public offset?: number;
    public constructor() { 
        super();
    }
    public withAgents(agents: Array<Agent>): ListAgentResponse {
        this['agents'] = agents;
        return this;
    }
    public withCount(count: number): ListAgentResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): ListAgentResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAgentResponse {
        this['offset'] = offset;
        return this;
    }
}