import { CustomerBatchDeleteInstanceRecord } from './CustomerBatchDeleteInstanceRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteInstanceResponse extends SdkResponse {
    public records?: Array<CustomerBatchDeleteInstanceRecord>;
    public constructor() { 
        super();
    }
    public withRecords(records: Array<CustomerBatchDeleteInstanceRecord>): BatchDeleteInstanceResponse {
        this['records'] = records;
        return this;
    }
}