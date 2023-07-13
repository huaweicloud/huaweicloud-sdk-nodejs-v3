import { AomMappingRuleResp } from './AomMappingRuleResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAomMappingRulesResponse extends SdkResponse {
    public body?: Array<AomMappingRuleResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<AomMappingRuleResp>): ShowAomMappingRulesResponse {
        this['body'] = body;
        return this;
    }
}