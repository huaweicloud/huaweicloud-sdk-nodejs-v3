import { CodeSegment } from './CodeSegment';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCodeSegmentsResponse extends SdkResponse {
    public count?: number;
    public records?: Array<CodeSegment>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListCodeSegmentsResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<CodeSegment>): ListCodeSegmentsResponse {
        this['records'] = records;
        return this;
    }
}