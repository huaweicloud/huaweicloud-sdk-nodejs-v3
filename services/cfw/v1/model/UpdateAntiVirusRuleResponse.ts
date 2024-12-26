import { ResponseData } from './ResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAntiVirusRuleResponse extends SdkResponse {
    public data?: ResponseData;
    public constructor() { 
        super();
    }
    public withData(data: ResponseData): UpdateAntiVirusRuleResponse {
        this['data'] = data;
        return this;
    }
}