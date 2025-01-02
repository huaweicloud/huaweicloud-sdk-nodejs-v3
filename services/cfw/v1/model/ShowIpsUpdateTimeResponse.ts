import { IpsRuleUpdateTimeVO } from './IpsRuleUpdateTimeVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpsUpdateTimeResponse extends SdkResponse {
    public data?: Array<IpsRuleUpdateTimeVO>;
    public constructor() { 
        super();
    }
    public withData(data: Array<IpsRuleUpdateTimeVO>): ShowIpsUpdateTimeResponse {
        this['data'] = data;
        return this;
    }
}