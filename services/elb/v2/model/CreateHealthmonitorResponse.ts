import { HealthmonitorResp } from './HealthmonitorResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateHealthmonitorResponse extends SdkResponse {
    public healthmonitor?: HealthmonitorResp;
    public constructor() { 
        super();
    }
    public withHealthmonitor(healthmonitor: HealthmonitorResp): CreateHealthmonitorResponse {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
}