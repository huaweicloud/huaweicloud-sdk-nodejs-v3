import { SlowLogDetail } from './SlowLogDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlowLogDetailSampleResponse extends SdkResponse {
    public sample?: SlowLogDetail;
    public constructor() { 
        super();
    }
    public withSample(sample: SlowLogDetail): ShowSlowLogDetailSampleResponse {
        this['sample'] = sample;
        return this;
    }
}