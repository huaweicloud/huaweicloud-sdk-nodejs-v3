import { Agent } from './Agent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgentResponse extends SdkResponse {
    public agent?: Agent;
    public constructor() { 
        super();
    }
    public withAgent(agent: Agent): ShowAgentResponse {
        this['agent'] = agent;
        return this;
    }
}