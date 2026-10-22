
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBotMRuleActionResponse extends SdkResponse {
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): UpdateBotMRuleActionResponse {
        this['result'] = result;
        return this;
    }
}