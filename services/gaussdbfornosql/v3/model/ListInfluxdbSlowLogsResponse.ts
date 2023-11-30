import { InfluxdbSlowLogDetail } from './InfluxdbSlowLogDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInfluxdbSlowLogsResponse extends SdkResponse {
    private 'slow_logs'?: Array<InfluxdbSlowLogDetail>;
    public constructor() { 
        super();
    }
    public withSlowLogs(slowLogs: Array<InfluxdbSlowLogDetail>): ListInfluxdbSlowLogsResponse {
        this['slow_logs'] = slowLogs;
        return this;
    }
    public set slowLogs(slowLogs: Array<InfluxdbSlowLogDetail>  | undefined) {
        this['slow_logs'] = slowLogs;
    }
    public get slowLogs(): Array<InfluxdbSlowLogDetail> | undefined {
        return this['slow_logs'];
    }
}