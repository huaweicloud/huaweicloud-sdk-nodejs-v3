import { TrafficTrendVO } from './TrafficTrendVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrafficTrendResponse extends SdkResponse {
    public data?: Array<TrafficTrendVO>;
    public constructor() { 
        super();
    }
    public withData(data: Array<TrafficTrendVO>): ShowTrafficTrendResponse {
        this['data'] = data;
        return this;
    }
}