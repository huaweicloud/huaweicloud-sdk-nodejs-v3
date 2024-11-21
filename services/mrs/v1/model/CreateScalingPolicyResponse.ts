
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateScalingPolicyResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): CreateScalingPolicyResponse {
        this['result'] = result;
        return this;
    }
}