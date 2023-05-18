import { Agent } from './Agent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RegisterAgentResponse extends SdkResponse {
    public agent?: Agent;
    public constructor() { 
        super();
    }
    public withAgent(agent: Agent): RegisterAgentResponse {
        this['agent'] = agent;
        return this;
    }
}