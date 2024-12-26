import { AdvancedIpsRuleListVo } from './AdvancedIpsRuleListVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpsRulesResponse extends SdkResponse {
    public data?: AdvancedIpsRuleListVo;
    public constructor() { 
        super();
    }
    public withData(data: AdvancedIpsRuleListVo): ListIpsRulesResponse {
        this['data'] = data;
        return this;
    }
}