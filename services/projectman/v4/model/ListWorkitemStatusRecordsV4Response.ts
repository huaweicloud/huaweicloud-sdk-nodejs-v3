import { WorkitemStatusRecords } from './WorkitemStatusRecords';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkitemStatusRecordsV4Response extends SdkResponse {
    public records?: Array<WorkitemStatusRecords>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withRecords(records: Array<WorkitemStatusRecords>): ListWorkitemStatusRecordsV4Response {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): ListWorkitemStatusRecordsV4Response {
        this['total'] = total;
        return this;
    }
}