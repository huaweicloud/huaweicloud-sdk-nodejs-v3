
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class VerifyDomainOwnerResponse extends SdkResponse {
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): VerifyDomainOwnerResponse {
        this['result'] = result;
        return this;
    }
}