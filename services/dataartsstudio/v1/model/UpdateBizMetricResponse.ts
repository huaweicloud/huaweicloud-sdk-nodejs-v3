import { CreateBizMetricResultData } from './CreateBizMetricResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBizMetricResponse extends SdkResponse {
    public data?: CreateBizMetricResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateBizMetricResultData): UpdateBizMetricResponse {
        this['data'] = data;
        return this;
    }
}