import { ResponseData } from './ResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAdvancedIpsRuleResponse extends SdkResponse {
    public data?: ResponseData;
    public constructor() { 
        super();
    }
    public withData(data: ResponseData): UpdateAdvancedIpsRuleResponse {
        this['data'] = data;
        return this;
    }
}