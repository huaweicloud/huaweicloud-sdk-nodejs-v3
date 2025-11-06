import { LeakageListInfo } from './LeakageListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAntileakagePolicyRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<LeakageListInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAntileakagePolicyRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<LeakageListInfo>): ListAntileakagePolicyRulesResponse {
        this['items'] = items;
        return this;
    }
}