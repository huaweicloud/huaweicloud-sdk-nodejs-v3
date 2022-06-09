import { HealthmonitorResp } from './HealthmonitorResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHealthmonitorResponse extends SdkResponse {
    public healthmonitor?: HealthmonitorResp;
    public constructor() { 
        super();
    }
    public withHealthmonitor(healthmonitor: HealthmonitorResp): UpdateHealthmonitorResponse {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
}