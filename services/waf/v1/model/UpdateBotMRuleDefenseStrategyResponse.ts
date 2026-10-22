
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBotMRuleDefenseStrategyResponse extends SdkResponse {
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): UpdateBotMRuleDefenseStrategyResponse {
        this['result'] = result;
        return this;
    }
}