import { Record } from './Record';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLoginRecordsNewResponse extends SdkResponse {
    private 'total_count'?: number;
    public records?: Array<Record>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListLoginRecordsNewResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withRecords(records: Array<Record>): ListLoginRecordsNewResponse {
        this['records'] = records;
        return this;
    }
}