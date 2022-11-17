import { DimChild } from './DimChild';
import { InstancesMonitoredObject } from './InstancesMonitoredObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMonitoredObjectsResponse extends SdkResponse {
    public router?: Array<string>;
    public children?: Array<DimChild>;
    public instances?: Array<InstancesMonitoredObject>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withRouter(router: Array<string>): ListMonitoredObjectsResponse {
        this['router'] = router;
        return this;
    }
    public withChildren(children: Array<DimChild>): ListMonitoredObjectsResponse {
        this['children'] = children;
        return this;
    }
    public withInstances(instances: Array<InstancesMonitoredObject>): ListMonitoredObjectsResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotal(total: number): ListMonitoredObjectsResponse {
        this['total'] = total;
        return this;
    }
}