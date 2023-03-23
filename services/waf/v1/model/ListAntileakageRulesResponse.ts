import { LeakageListInfo } from './LeakageListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAntileakageRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<LeakageListInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAntileakageRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<LeakageListInfo>): ListAntileakageRulesResponse {
        this['items'] = items;
        return this;
    }
}