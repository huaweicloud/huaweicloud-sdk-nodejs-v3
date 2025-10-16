
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateBotMRuleStatusResponse extends SdkResponse {
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): BatchUpdateBotMRuleStatusResponse {
        this['result'] = result;
        return this;
    }
}