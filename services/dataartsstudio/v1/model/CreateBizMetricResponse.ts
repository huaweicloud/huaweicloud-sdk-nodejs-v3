import { CreateBizMetricResultData } from './CreateBizMetricResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBizMetricResponse extends SdkResponse {
    public data?: CreateBizMetricResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateBizMetricResultData): CreateBizMetricResponse {
        this['data'] = data;
        return this;
    }
}