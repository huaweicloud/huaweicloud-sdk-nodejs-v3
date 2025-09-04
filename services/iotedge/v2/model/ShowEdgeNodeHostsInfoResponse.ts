import { HostInfoDTO } from './HostInfoDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEdgeNodeHostsInfoResponse extends SdkResponse {
    public hosts?: Array<HostInfoDTO>;
    public constructor() { 
        super();
    }
    public withHosts(hosts: Array<HostInfoDTO>): ShowEdgeNodeHostsInfoResponse {
        this['hosts'] = hosts;
        return this;
    }
}