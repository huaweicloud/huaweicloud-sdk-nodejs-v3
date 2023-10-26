import { ScanJob } from './ScanJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScanJobsResponse extends SdkResponse {
    public tasks?: Array<ScanJob>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<ScanJob>): ShowScanJobsResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withTotal(total: number): ShowScanJobsResponse {
        this['total'] = total;
        return this;
    }
}