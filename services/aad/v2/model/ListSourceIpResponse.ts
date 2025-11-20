import { SourceIp } from './SourceIp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSourceIpResponse extends SdkResponse {
    public ips?: Array<SourceIp>;
    public constructor() { 
        super();
    }
    public withIps(ips: Array<SourceIp>): ListSourceIpResponse {
        this['ips'] = ips;
        return this;
    }
}