import { UpdateBizMetricResultData } from './UpdateBizMetricResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBizMetricResponse extends SdkResponse {
    public data?: UpdateBizMetricResultData;
    public constructor() { 
        super();
    }
    public withData(data: UpdateBizMetricResultData): UpdateBizMetricResponse {
        this['data'] = data;
        return this;
    }
}