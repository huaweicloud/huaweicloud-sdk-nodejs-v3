import { IpReputationRulesListInfo } from './IpReputationRulesListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpReputationRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<IpReputationRulesListInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListIpReputationRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<IpReputationRulesListInfo>): ListIpReputationRulesResponse {
        this['items'] = items;
        return this;
    }
}