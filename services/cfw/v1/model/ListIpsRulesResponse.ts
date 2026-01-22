import { IpsRuleListVO } from './IpsRuleListVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpsRulesResponse extends SdkResponse {
    public data?: IpsRuleListVO;
    public constructor() { 
        super();
    }
    public withData(data: IpsRuleListVO): ListIpsRulesResponse {
        this['data'] = data;
        return this;
    }
}