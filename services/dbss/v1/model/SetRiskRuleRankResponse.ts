
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetRiskRuleRankResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): SetRiskRuleRankResponse {
        this['result'] = result;
        return this;
    }
}