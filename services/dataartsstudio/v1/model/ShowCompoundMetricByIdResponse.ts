import { CompoundMetricVODetailData } from './CompoundMetricVODetailData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCompoundMetricByIdResponse extends SdkResponse {
    public data?: CompoundMetricVODetailData;
    public constructor() { 
        super();
    }
    public withData(data: CompoundMetricVODetailData): ShowCompoundMetricByIdResponse {
        this['data'] = data;
        return this;
    }
}