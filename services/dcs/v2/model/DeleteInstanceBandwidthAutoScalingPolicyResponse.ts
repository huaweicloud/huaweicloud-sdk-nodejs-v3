
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteInstanceBandwidthAutoScalingPolicyResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): DeleteInstanceBandwidthAutoScalingPolicyResponse {
        this['body'] = body;
        return this;
    }
}