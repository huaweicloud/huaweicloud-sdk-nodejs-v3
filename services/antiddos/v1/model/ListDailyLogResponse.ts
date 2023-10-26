import { DailyLog } from './DailyLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDailyLogResponse extends SdkResponse {
    public total?: number;
    public logs?: Array<DailyLog>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListDailyLogResponse {
        this['total'] = total;
        return this;
    }
    public withLogs(logs: Array<DailyLog>): ListDailyLogResponse {
        this['logs'] = logs;
        return this;
    }
}