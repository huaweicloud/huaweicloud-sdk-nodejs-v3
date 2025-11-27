import { Cluster } from './Cluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterListResponse extends SdkResponse {
    public items?: Array<Cluster>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withItems(items: Array<Cluster>): ShowClusterListResponse {
        this['items'] = items;
        return this;
    }
    public withTotal(total: number): ShowClusterListResponse {
        this['total'] = total;
        return this;
    }
}