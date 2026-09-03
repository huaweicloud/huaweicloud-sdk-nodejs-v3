import { ExceededInstanceInfo } from './ExceededInstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupUsageExceededInstancesResponse extends SdkResponse {
    public instances?: Array<ExceededInstanceInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<ExceededInstanceInfo>): ShowBackupUsageExceededInstancesResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotal(total: number): ShowBackupUsageExceededInstancesResponse {
        this['total'] = total;
        return this;
    }
}