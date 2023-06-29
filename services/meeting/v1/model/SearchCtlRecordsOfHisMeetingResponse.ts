import { ConfCtlRecordInfo } from './ConfCtlRecordInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCtlRecordsOfHisMeetingResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<ConfCtlRecordInfo>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchCtlRecordsOfHisMeetingResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchCtlRecordsOfHisMeetingResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchCtlRecordsOfHisMeetingResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<ConfCtlRecordInfo>): SearchCtlRecordsOfHisMeetingResponse {
        this['data'] = data;
        return this;
    }
}