import { ListHostsRspDedicatedHosts } from './ListHostsRspDedicatedHosts';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostsDetailResponse extends SdkResponse {
    private 'dedicated_hosts'?: Array<ListHostsRspDedicatedHosts>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withDedicatedHosts(dedicatedHosts: Array<ListHostsRspDedicatedHosts>): ListHostsDetailResponse {
        this['dedicated_hosts'] = dedicatedHosts;
        return this;
    }
    public set dedicatedHosts(dedicatedHosts: Array<ListHostsRspDedicatedHosts>  | undefined) {
        this['dedicated_hosts'] = dedicatedHosts;
    }
    public get dedicatedHosts(): Array<ListHostsRspDedicatedHosts> | undefined {
        return this['dedicated_hosts'];
    }
    public withTotal(total: number): ListHostsDetailResponse {
        this['total'] = total;
        return this;
    }
}