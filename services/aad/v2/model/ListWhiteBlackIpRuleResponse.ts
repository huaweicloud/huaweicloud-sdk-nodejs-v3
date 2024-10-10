import { BwListIps } from './BwListIps';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWhiteBlackIpRuleResponse extends SdkResponse {
    public total?: number;
    public ips?: Array<BwListIps>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWhiteBlackIpRuleResponse {
        this['total'] = total;
        return this;
    }
    public withIps(ips: Array<BwListIps>): ListWhiteBlackIpRuleResponse {
        this['ips'] = ips;
        return this;
    }
}