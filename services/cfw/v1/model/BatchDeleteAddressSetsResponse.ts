import { BatchDeleteAddressSetsRespData } from './BatchDeleteAddressSetsRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteAddressSetsResponse extends SdkResponse {
    public data?: Array<BatchDeleteAddressSetsRespData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<BatchDeleteAddressSetsRespData>): BatchDeleteAddressSetsResponse {
        this['data'] = data;
        return this;
    }
}