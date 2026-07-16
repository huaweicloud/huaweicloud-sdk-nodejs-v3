import { ClusterResponse } from './ClusterResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuthoringClustersResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ClusterResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListAuthoringClustersResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ClusterResponse>): ListAuthoringClustersResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListAuthoringClustersResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListAuthoringClustersResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListAuthoringClustersResponse {
        this['total'] = total;
        return this;
    }
}