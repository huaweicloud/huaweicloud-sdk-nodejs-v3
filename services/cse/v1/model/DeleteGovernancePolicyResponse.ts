
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteGovernancePolicyResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): DeleteGovernancePolicyResponse {
        this['result'] = result;
        return this;
    }
}