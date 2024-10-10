import { BlackWhiteListRule } from './BlackWhiteListRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWafWhiteIpRuleResponse extends SdkResponse {
    public total?: number;
    public black?: Array<BlackWhiteListRule>;
    public white?: Array<BlackWhiteListRule>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWafWhiteIpRuleResponse {
        this['total'] = total;
        return this;
    }
    public withBlack(black: Array<BlackWhiteListRule>): ListWafWhiteIpRuleResponse {
        this['black'] = black;
        return this;
    }
    public withWhite(white: Array<BlackWhiteListRule>): ListWafWhiteIpRuleResponse {
        this['white'] = white;
        return this;
    }
}