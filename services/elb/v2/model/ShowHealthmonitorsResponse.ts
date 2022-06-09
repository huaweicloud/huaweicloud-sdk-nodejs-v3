import { HealthmonitorResp } from './HealthmonitorResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHealthmonitorsResponse extends SdkResponse {
    public healthmonitor?: HealthmonitorResp;
    public constructor() { 
        super();
    }
    public withHealthmonitor(healthmonitor: HealthmonitorResp): ShowHealthmonitorsResponse {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
}