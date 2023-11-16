
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGovernancePolicyResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateGovernancePolicyResponse {
        this['result'] = result;
        return this;
    }
}