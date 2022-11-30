import { CdnLog } from './CdnLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainLogsResponse extends SdkResponse {
    public total?: number;
    public logs?: Array<CdnLog>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListDomainLogsResponse {
        this['total'] = total;
        return this;
    }
    public withLogs(logs: Array<CdnLog>): ListDomainLogsResponse {
        this['logs'] = logs;
        return this;
    }
}