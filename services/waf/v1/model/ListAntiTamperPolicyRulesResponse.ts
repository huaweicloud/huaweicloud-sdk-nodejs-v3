import { LeakageListInfo } from './LeakageListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAntiTamperPolicyRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<LeakageListInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAntiTamperPolicyRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<LeakageListInfo>): ListAntiTamperPolicyRulesResponse {
        this['items'] = items;
        return this;
    }
}