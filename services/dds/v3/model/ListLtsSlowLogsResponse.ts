import { SlowLogDetail } from './SlowLogDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLtsSlowLogsResponse extends SdkResponse {
    private 'slow_logs'?: Array<SlowLogDetail>;
    public constructor() { 
        super();
    }
    public withSlowLogs(slowLogs: Array<SlowLogDetail>): ListLtsSlowLogsResponse {
        this['slow_logs'] = slowLogs;
        return this;
    }
    public set slowLogs(slowLogs: Array<SlowLogDetail>  | undefined) {
        this['slow_logs'] = slowLogs;
    }
    public get slowLogs(): Array<SlowLogDetail> | undefined {
        return this['slow_logs'];
    }
}