import { HealthmonitorResp } from './HealthmonitorResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHealthmonitorsResponse extends SdkResponse {
    public healthmonitors?: Array<HealthmonitorResp>;
    public constructor() { 
        super();
    }
    public withHealthmonitors(healthmonitors: Array<HealthmonitorResp>): ListHealthmonitorsResponse {
        this['healthmonitors'] = healthmonitors;
        return this;
    }
}