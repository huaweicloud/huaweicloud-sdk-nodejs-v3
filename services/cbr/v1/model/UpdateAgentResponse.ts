import { Agent } from './Agent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAgentResponse extends SdkResponse {
    public agent?: Agent;
    public constructor() { 
        super();
    }
    public withAgent(agent: Agent): UpdateAgentResponse {
        this['agent'] = agent;
        return this;
    }
}