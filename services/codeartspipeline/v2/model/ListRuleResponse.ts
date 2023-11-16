import { Rule } from './Rule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRuleResponse extends SdkResponse {
    public data?: Array<Rule>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<Rule>): ListRuleResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ListRuleResponse {
        this['total'] = total;
        return this;
    }
}