import { MongodbSlowLogDetail } from './MongodbSlowLogDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMongodbSlowLogsResponse extends SdkResponse {
    private 'slow_logs'?: Array<MongodbSlowLogDetail>;
    public constructor() { 
        super();
    }
    public withSlowLogs(slowLogs: Array<MongodbSlowLogDetail>): ListMongodbSlowLogsResponse {
        this['slow_logs'] = slowLogs;
        return this;
    }
    public set slowLogs(slowLogs: Array<MongodbSlowLogDetail>  | undefined) {
        this['slow_logs'] = slowLogs;
    }
    public get slowLogs(): Array<MongodbSlowLogDetail> | undefined {
        return this['slow_logs'];
    }
}