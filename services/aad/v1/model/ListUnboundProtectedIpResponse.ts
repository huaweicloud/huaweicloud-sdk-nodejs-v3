import { ProtectedIpResponse } from './ProtectedIpResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUnboundProtectedIpResponse extends SdkResponse {
    public total?: number;
    public ips?: Array<ProtectedIpResponse>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListUnboundProtectedIpResponse {
        this['total'] = total;
        return this;
    }
    public withIps(ips: Array<ProtectedIpResponse>): ListUnboundProtectedIpResponse {
        this['ips'] = ips;
        return this;
    }
}