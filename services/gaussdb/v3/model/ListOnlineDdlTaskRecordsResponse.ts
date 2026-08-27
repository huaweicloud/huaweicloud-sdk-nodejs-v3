import { RecordItem } from './RecordItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOnlineDdlTaskRecordsResponse extends SdkResponse {
    public records?: Array<RecordItem>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withRecords(records: Array<RecordItem>): ListOnlineDdlTaskRecordsResponse {
        this['records'] = records;
        return this;
    }
    public withTotalCount(totalCount: number): ListOnlineDdlTaskRecordsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}