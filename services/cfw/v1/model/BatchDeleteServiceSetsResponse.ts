import { BatchDeleteServiceSetsRespData } from './BatchDeleteServiceSetsRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteServiceSetsResponse extends SdkResponse {
    public data?: Array<BatchDeleteServiceSetsRespData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<BatchDeleteServiceSetsRespData>): BatchDeleteServiceSetsResponse {
        this['data'] = data;
        return this;
    }
}