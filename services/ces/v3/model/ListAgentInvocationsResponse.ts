import { InvocationInfo } from './InvocationInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgentInvocationsResponse extends SdkResponse {
    public invocations?: Array<InvocationInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withInvocations(invocations: Array<InvocationInfo>): ListAgentInvocationsResponse {
        this['invocations'] = invocations;
        return this;
    }
    public withCount(count: number): ListAgentInvocationsResponse {
        this['count'] = count;
        return this;
    }
}