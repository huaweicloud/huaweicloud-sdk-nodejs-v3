import { L7ruleResp } from './L7ruleResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateL7ruleResponse extends SdkResponse {
    public rule?: L7ruleResp;
    public constructor() { 
        super();
    }
    public withRule(rule: L7ruleResp): CreateL7ruleResponse {
        this['rule'] = rule;
        return this;
    }
}