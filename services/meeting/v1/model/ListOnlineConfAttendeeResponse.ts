import { OnlineAttendeeRecordInfo } from './OnlineAttendeeRecordInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOnlineConfAttendeeResponse extends SdkResponse {
    public data?: Array<OnlineAttendeeRecordInfo>;
    public offset?: number;
    public limit?: number;
    public count?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<OnlineAttendeeRecordInfo>): ListOnlineConfAttendeeResponse {
        this['data'] = data;
        return this;
    }
    public withOffset(offset: number): ListOnlineConfAttendeeResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListOnlineConfAttendeeResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListOnlineConfAttendeeResponse {
        this['count'] = count;
        return this;
    }
}