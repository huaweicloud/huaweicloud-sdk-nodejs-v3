import { CassandraSlowLogDetail } from './CassandraSlowLogDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCassandraSlowLogsResponse extends SdkResponse {
    private 'slow_logs'?: Array<CassandraSlowLogDetail>;
    public constructor() { 
        super();
    }
    public withSlowLogs(slowLogs: Array<CassandraSlowLogDetail>): ListCassandraSlowLogsResponse {
        this['slow_logs'] = slowLogs;
        return this;
    }
    public set slowLogs(slowLogs: Array<CassandraSlowLogDetail>  | undefined) {
        this['slow_logs'] = slowLogs;
    }
    public get slowLogs(): Array<CassandraSlowLogDetail> | undefined {
        return this['slow_logs'];
    }
}