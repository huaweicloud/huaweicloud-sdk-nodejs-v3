import { RecordInfoResponse } from './RecordInfoResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDisasterRecoveryRecordResponse extends SdkResponse {
    public records?: Array<RecordInfoResponse>;
    public constructor() { 
        super();
    }
    public withRecords(records: Array<RecordInfoResponse>): ListDisasterRecoveryRecordResponse {
        this['records'] = records;
        return this;
    }
}