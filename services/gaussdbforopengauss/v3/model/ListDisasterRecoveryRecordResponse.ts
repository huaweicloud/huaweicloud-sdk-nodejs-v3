import { RecordInfoResponseResult } from './RecordInfoResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDisasterRecoveryRecordResponse extends SdkResponse {
    public records?: Array<RecordInfoResponseResult>;
    public constructor() { 
        super();
    }
    public withRecords(records: Array<RecordInfoResponseResult>): ListDisasterRecoveryRecordResponse {
        this['records'] = records;
        return this;
    }
}