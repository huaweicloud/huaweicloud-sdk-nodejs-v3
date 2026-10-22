
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateBotMRuleActionResponse extends SdkResponse {
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): BatchUpdateBotMRuleActionResponse {
        this['result'] = result;
        return this;
    }
}