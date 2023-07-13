import { LogInfo } from './LogInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLiveSampleLogsResponse extends SdkResponse {
    public total?: number;
    public domain?: string;
    public logs?: Array<LogInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListLiveSampleLogsResponse {
        this['total'] = total;
        return this;
    }
    public withDomain(domain: string): ListLiveSampleLogsResponse {
        this['domain'] = domain;
        return this;
    }
    public withLogs(logs: Array<LogInfo>): ListLiveSampleLogsResponse {
        this['logs'] = logs;
        return this;
    }
}