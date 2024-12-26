import { IpsRuleListVO } from './IpsRuleListVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpsRules1Response extends SdkResponse {
    public data?: IpsRuleListVO;
    public constructor() { 
        super();
    }
    public withData(data: IpsRuleListVO): ListIpsRules1Response {
        this['data'] = data;
        return this;
    }
}