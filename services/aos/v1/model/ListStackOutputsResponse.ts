import { StackOutput } from './StackOutput';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStackOutputsResponse extends SdkResponse {
    public outputs?: Array<StackOutput>;
    public constructor() { 
        super();
    }
    public withOutputs(outputs: Array<StackOutput>): ListStackOutputsResponse {
        this['outputs'] = outputs;
        return this;
    }
}