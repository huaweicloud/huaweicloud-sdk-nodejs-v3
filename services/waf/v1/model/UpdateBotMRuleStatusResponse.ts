
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBotMRuleStatusResponse extends SdkResponse {
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): UpdateBotMRuleStatusResponse {
        this['result'] = result;
        return this;
    }
}