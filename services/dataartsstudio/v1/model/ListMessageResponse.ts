import { RecordForApplyDetail } from './RecordForApplyDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMessageResponse extends SdkResponse {
    public total?: number;
    public records?: Array<RecordForApplyDetail>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListMessageResponse {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<RecordForApplyDetail>): ListMessageResponse {
        this['records'] = records;
        return this;
    }
}