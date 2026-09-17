
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ParseSqlLimitRuleNewResponse extends SdkResponse {
    public rule?: string;
    public constructor() { 
        super();
    }
    public withRule(rule: string): ParseSqlLimitRuleNewResponse {
        this['rule'] = rule;
        return this;
    }
}