import { IpReputationRulesListInfo } from './IpReputationRulesListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpReputationPolicyRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<IpReputationRulesListInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListIpReputationPolicyRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<IpReputationRulesListInfo>): ListIpReputationPolicyRulesResponse {
        this['items'] = items;
        return this;
    }
}