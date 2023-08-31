import { BatchCreateInvocationInfo } from './BatchCreateInvocationInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateAgentInvocationsResponse extends SdkResponse {
    public invocations?: Array<BatchCreateInvocationInfo>;
    public constructor() { 
        super();
    }
    public withInvocations(invocations: Array<BatchCreateInvocationInfo>): BatchCreateAgentInvocationsResponse {
        this['invocations'] = invocations;
        return this;
    }
}