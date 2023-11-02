import { RecordForApplyDetail } from './RecordForApplyDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplyResponse extends SdkResponse {
    public total?: number;
    public records?: Array<RecordForApplyDetail>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListApplyResponse {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<RecordForApplyDetail>): ListApplyResponse {
        this['records'] = records;
        return this;
    }
}