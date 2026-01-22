import { HitStatusResponseData } from './HitStatusResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAclRuleHitStatusResponse extends SdkResponse {
    public data?: HitStatusResponseData;
    public constructor() { 
        super();
    }
    public withData(data: HitStatusResponseData): ListAclRuleHitStatusResponse {
        this['data'] = data;
        return this;
    }
}