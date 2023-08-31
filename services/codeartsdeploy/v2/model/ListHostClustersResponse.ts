import { HostClusterInfo } from './HostClusterInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostClustersResponse extends SdkResponse {
    public status?: string;
    public total?: number;
    public result?: Array<HostClusterInfo>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListHostClustersResponse {
        this['status'] = status;
        return this;
    }
    public withTotal(total: number): ListHostClustersResponse {
        this['total'] = total;
        return this;
    }
    public withResult(result: Array<HostClusterInfo>): ListHostClustersResponse {
        this['result'] = result;
        return this;
    }
}