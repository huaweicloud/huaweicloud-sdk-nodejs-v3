import { AutoScalingPolicyV2 } from './AutoScalingPolicyV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoScalingPolicyResponse extends SdkResponse {
    public body?: Array<AutoScalingPolicyV2>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<AutoScalingPolicyV2>): ShowAutoScalingPolicyResponse {
        this['body'] = body;
        return this;
    }
}