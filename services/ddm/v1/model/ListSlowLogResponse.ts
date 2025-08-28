import { SlowLogList } from './SlowLogList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowLogResponse extends SdkResponse {
    public totalRecord?: number;
    public slowLogList?: Array<SlowLogList>;
    public constructor() { 
        super();
    }
    public withTotalRecord(totalRecord: number): ListSlowLogResponse {
        this['totalRecord'] = totalRecord;
        return this;
    }
    public withSlowLogList(slowLogList: Array<SlowLogList>): ListSlowLogResponse {
        this['slowLogList'] = slowLogList;
        return this;
    }
}