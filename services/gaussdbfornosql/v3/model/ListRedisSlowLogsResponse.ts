import { RedisSlowLogDetail } from './RedisSlowLogDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRedisSlowLogsResponse extends SdkResponse {
    private 'slow_logs'?: Array<RedisSlowLogDetail>;
    public constructor() { 
        super();
    }
    public withSlowLogs(slowLogs: Array<RedisSlowLogDetail>): ListRedisSlowLogsResponse {
        this['slow_logs'] = slowLogs;
        return this;
    }
    public set slowLogs(slowLogs: Array<RedisSlowLogDetail>  | undefined) {
        this['slow_logs'] = slowLogs;
    }
    public get slowLogs(): Array<RedisSlowLogDetail> | undefined {
        return this['slow_logs'];
    }
}