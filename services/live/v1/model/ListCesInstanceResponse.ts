import { ListCesInstanceRspBodyInstances } from './ListCesInstanceRspBodyInstances';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCesInstanceResponse extends SdkResponse {
    public instances?: Array<ListCesInstanceRspBodyInstances>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<ListCesInstanceRspBodyInstances>): ListCesInstanceResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotal(total: number): ListCesInstanceResponse {
        this['total'] = total;
        return this;
    }
}