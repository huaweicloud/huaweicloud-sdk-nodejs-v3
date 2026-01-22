import { AdvancedIpsRuleListVo } from './AdvancedIpsRuleListVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAdvancedIpsRulesResponse extends SdkResponse {
    public data?: AdvancedIpsRuleListVo;
    public constructor() { 
        super();
    }
    public withData(data: AdvancedIpsRuleListVo): ListAdvancedIpsRulesResponse {
        this['data'] = data;
        return this;
    }
}