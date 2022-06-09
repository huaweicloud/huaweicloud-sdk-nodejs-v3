import { L7ruleResp } from './L7ruleResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListL7rulesResponse extends SdkResponse {
    public rules?: Array<L7ruleResp>;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<L7ruleResp>): ListL7rulesResponse {
        this['rules'] = rules;
        return this;
    }
}