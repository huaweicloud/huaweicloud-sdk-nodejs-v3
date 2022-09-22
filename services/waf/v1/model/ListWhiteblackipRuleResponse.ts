import { WhiteBlackIpResponseBody } from './WhiteBlackIpResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWhiteblackipRuleResponse extends SdkResponse {
    public total?: number;
    public items?: Array<WhiteBlackIpResponseBody>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWhiteblackipRuleResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<WhiteBlackIpResponseBody>): ListWhiteblackipRuleResponse {
        this['items'] = items;
        return this;
    }
}