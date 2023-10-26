import { ResponseRule } from './ResponseRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRulesResponse extends SdkResponse {
    public rules?: Array<ResponseRule>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<ResponseRule>): ShowRulesResponse {
        this['rules'] = rules;
        return this;
    }
    public withTotal(total: number): ShowRulesResponse {
        this['total'] = total;
        return this;
    }
}