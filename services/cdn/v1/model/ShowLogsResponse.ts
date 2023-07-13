import { LogObject } from './LogObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLogsResponse extends SdkResponse {
    public total?: number;
    public logs?: Array<LogObject>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowLogsResponse {
        this['total'] = total;
        return this;
    }
    public withLogs(logs: Array<LogObject>): ShowLogsResponse {
        this['logs'] = logs;
        return this;
    }
}