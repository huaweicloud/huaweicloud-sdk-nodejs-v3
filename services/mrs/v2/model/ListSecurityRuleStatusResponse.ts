
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityRuleStatusResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListSecurityRuleStatusResponse {
        this['status'] = status;
        return this;
    }
}