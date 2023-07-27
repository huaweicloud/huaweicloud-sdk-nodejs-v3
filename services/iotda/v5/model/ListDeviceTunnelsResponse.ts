import { TunnelInfo } from './TunnelInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeviceTunnelsResponse extends SdkResponse {
    public tunnels?: Array<TunnelInfo>;
    public constructor() { 
        super();
    }
    public withTunnels(tunnels: Array<TunnelInfo>): ListDeviceTunnelsResponse {
        this['tunnels'] = tunnels;
        return this;
    }
}