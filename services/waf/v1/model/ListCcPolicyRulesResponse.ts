import { CcrulesListInfo } from './CcrulesListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCcPolicyRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<CcrulesListInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCcPolicyRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<CcrulesListInfo>): ListCcPolicyRulesResponse {
        this['items'] = items;
        return this;
    }
}