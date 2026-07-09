import { AuditInstanceBean } from './AuditInstanceBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditInstancesLastResponse extends SdkResponse {
    public instances?: Array<AuditInstanceBean>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<AuditInstanceBean>): ListAuditInstancesLastResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotal(total: number): ListAuditInstancesLastResponse {
        this['total'] = total;
        return this;
    }
}