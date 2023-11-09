import { ComponentRecordView } from './ComponentRecordView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowComponentRecordsResponse extends SdkResponse {
    public count?: number;
    public records?: Array<ComponentRecordView>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowComponentRecordsResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<ComponentRecordView>): ShowComponentRecordsResponse {
        this['records'] = records;
        return this;
    }
}