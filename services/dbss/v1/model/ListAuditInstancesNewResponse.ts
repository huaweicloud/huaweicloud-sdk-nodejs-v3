import { ResponseAuditV2 } from './ResponseAuditV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditInstancesNewResponse extends SdkResponse {
    public instances?: Array<ResponseAuditV2>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<ResponseAuditV2>): ListAuditInstancesNewResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotal(total: number): ListAuditInstancesNewResponse {
        this['total'] = total;
        return this;
    }
}