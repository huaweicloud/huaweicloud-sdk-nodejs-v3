import { ConfAttendeeRecordInfo } from './ConfAttendeeRecordInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchAttendanceRecordsOfHisMeetingResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<ConfAttendeeRecordInfo>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchAttendanceRecordsOfHisMeetingResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchAttendanceRecordsOfHisMeetingResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchAttendanceRecordsOfHisMeetingResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<ConfAttendeeRecordInfo>): SearchAttendanceRecordsOfHisMeetingResponse {
        this['data'] = data;
        return this;
    }
}