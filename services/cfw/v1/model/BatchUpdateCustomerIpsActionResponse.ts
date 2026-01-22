import { BatchCustomerIpsRespData } from './BatchCustomerIpsRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateCustomerIpsActionResponse extends SdkResponse {
    public data?: BatchCustomerIpsRespData;
    public constructor() { 
        super();
    }
    public withData(data: BatchCustomerIpsRespData): BatchUpdateCustomerIpsActionResponse {
        this['data'] = data;
        return this;
    }
}