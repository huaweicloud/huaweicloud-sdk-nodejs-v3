
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGovernancePolicyResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): CreateGovernancePolicyResponse {
        this['result'] = result;
        return this;
    }
}