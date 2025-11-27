import { Cluster } from './Cluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListManagedClustersResponse extends SdkResponse {
    public body?: Array<Cluster>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<Cluster>): ListManagedClustersResponse {
        this['body'] = body;
        return this;
    }
}