import { HttpGetAclTagResponseData } from './HttpGetAclTagResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRuleAclTagsResponse extends SdkResponse {
    public data?: HttpGetAclTagResponseData;
    public constructor() { 
        super();
    }
    public withData(data: HttpGetAclTagResponseData): ListRuleAclTagsResponse {
        this['data'] = data;
        return this;
    }
}