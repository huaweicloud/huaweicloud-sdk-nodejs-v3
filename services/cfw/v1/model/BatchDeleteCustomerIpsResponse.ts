import { BatchCustomerIpsRespData } from './BatchCustomerIpsRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteCustomerIpsResponse extends SdkResponse {
    public data?: BatchCustomerIpsRespData;
    public constructor() { 
        super();
    }
    public withData(data: BatchCustomerIpsRespData): BatchDeleteCustomerIpsResponse {
        this['data'] = data;
        return this;
    }
}