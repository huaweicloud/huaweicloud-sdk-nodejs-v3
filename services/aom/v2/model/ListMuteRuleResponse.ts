import { MuteRule } from './MuteRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMuteRuleResponse extends SdkResponse {
    public body?: Array<MuteRule>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MuteRule>): ListMuteRuleResponse {
        this['body'] = body;
        return this;
    }
}