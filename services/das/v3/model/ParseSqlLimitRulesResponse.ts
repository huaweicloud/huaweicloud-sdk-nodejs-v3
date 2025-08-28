
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ParseSqlLimitRulesResponse extends SdkResponse {
    public rule?: string;
    public constructor() { 
        super();
    }
    public withRule(rule: string): ParseSqlLimitRulesResponse {
        this['rule'] = rule;
        return this;
    }
}