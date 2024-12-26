import { IpsRuleChangeRespBody } from './IpsRuleChangeRespBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeIpsRuleModeResponse extends SdkResponse {
    public data?: IpsRuleChangeRespBody;
    public constructor() { 
        super();
    }
    public withData(data: IpsRuleChangeRespBody): ChangeIpsRuleModeResponse {
        this['data'] = data;
        return this;
    }
}