import { RespDedicatedHost } from './RespDedicatedHost';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDedicatedHostsResponse extends SdkResponse {
    private 'dedicated_hosts'?: Array<RespDedicatedHost>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withDedicatedHosts(dedicatedHosts: Array<RespDedicatedHost>): ListDedicatedHostsResponse {
        this['dedicated_hosts'] = dedicatedHosts;
        return this;
    }
    public set dedicatedHosts(dedicatedHosts: Array<RespDedicatedHost>  | undefined) {
        this['dedicated_hosts'] = dedicatedHosts;
    }
    public get dedicatedHosts(): Array<RespDedicatedHost> | undefined {
        return this['dedicated_hosts'];
    }
    public withTotal(total: number): ListDedicatedHostsResponse {
        this['total'] = total;
        return this;
    }
}