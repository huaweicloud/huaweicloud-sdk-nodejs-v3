import { CreateBizMetricResultData } from './CreateBizMetricResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBizMetricByIdResponse extends SdkResponse {
    public data?: CreateBizMetricResultData;
    public constructor() { 
        super();
    }
    public withData(data: CreateBizMetricResultData): ShowBizMetricByIdResponse {
        this['data'] = data;
        return this;
    }
}