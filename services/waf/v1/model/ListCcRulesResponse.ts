import { CcrulesListInfo } from './CcrulesListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCcRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<CcrulesListInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCcRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<CcrulesListInfo>): ListCcRulesResponse {
        this['items'] = items;
        return this;
    }
}