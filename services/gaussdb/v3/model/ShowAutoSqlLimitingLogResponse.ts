import { AutoSqlLimitingLog } from './AutoSqlLimitingLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoSqlLimitingLogResponse extends SdkResponse {
    public logs?: Array<AutoSqlLimitingLog>;
    public constructor() { 
        super();
    }
    public withLogs(logs: Array<AutoSqlLimitingLog>): ShowAutoSqlLimitingLogResponse {
        this['logs'] = logs;
        return this;
    }
}