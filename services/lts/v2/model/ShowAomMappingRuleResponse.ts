import { AomMappingRuleResp } from './AomMappingRuleResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAomMappingRuleResponse extends SdkResponse {
    public body?: Array<AomMappingRuleResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<AomMappingRuleResp>): ShowAomMappingRuleResponse {
        this['body'] = body;
        return this;
    }
}