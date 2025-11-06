import { WhiteBlackIpResponseBody } from './WhiteBlackIpResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWhiteblackipPolicyRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<WhiteBlackIpResponseBody>;
    public size?: number;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWhiteblackipPolicyRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<WhiteBlackIpResponseBody>): ListWhiteblackipPolicyRulesResponse {
        this['items'] = items;
        return this;
    }
    public withSize(size: number): ListWhiteblackipPolicyRulesResponse {
        this['size'] = size;
        return this;
    }
}