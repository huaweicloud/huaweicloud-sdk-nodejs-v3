
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyAutoExpandPolicyResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): ModifyAutoExpandPolicyResponse {
        this['result'] = result;
        return this;
    }
}