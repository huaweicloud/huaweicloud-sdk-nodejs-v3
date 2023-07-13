import { RecordResultDO } from './RecordResultDO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchRecordingsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<RecordResultDO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchRecordingsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchRecordingsResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchRecordingsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<RecordResultDO>): SearchRecordingsResponse {
        this['data'] = data;
        return this;
    }
}