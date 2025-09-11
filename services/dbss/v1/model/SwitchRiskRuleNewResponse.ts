
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchRiskRuleNewResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): SwitchRiskRuleNewResponse {
        this['status'] = status;
        return this;
    }
}