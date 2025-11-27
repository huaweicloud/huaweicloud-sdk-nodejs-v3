import { ClusterGroup } from './ClusterGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterGroupResponse extends SdkResponse {
    public items?: Array<ClusterGroup>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withItems(items: Array<ClusterGroup>): ListClusterGroupResponse {
        this['items'] = items;
        return this;
    }
    public withTotal(total: number): ListClusterGroupResponse {
        this['total'] = total;
        return this;
    }
}