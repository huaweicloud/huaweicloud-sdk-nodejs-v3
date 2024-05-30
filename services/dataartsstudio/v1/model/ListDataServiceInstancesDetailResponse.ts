import { InstanceDetailDTO } from './InstanceDetailDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataServiceInstancesDetailResponse extends SdkResponse {
    public total?: number;
    public instances?: Array<InstanceDetailDTO>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListDataServiceInstancesDetailResponse {
        this['total'] = total;
        return this;
    }
    public withInstances(instances: Array<InstanceDetailDTO>): ListDataServiceInstancesDetailResponse {
        this['instances'] = instances;
        return this;
    }
}