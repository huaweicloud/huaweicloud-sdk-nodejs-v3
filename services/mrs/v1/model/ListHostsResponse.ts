import { HostModel } from './HostModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostsResponse extends SdkResponse {
    public hosts?: Array<HostModel>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withHosts(hosts: Array<HostModel>): ListHostsResponse {
        this['hosts'] = hosts;
        return this;
    }
    public withTotal(total: number): ListHostsResponse {
        this['total'] = total;
        return this;
    }
}