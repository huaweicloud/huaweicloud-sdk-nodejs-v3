import { CreateResponseVpnConnection } from './CreateResponseVpnConnection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateVpnConnectionResponse extends SdkResponse {
    private 'vpn_connections'?: Array<CreateResponseVpnConnection>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withVpnConnections(vpnConnections: Array<CreateResponseVpnConnection>): BatchCreateVpnConnectionResponse {
        this['vpn_connections'] = vpnConnections;
        return this;
    }
    public set vpnConnections(vpnConnections: Array<CreateResponseVpnConnection>  | undefined) {
        this['vpn_connections'] = vpnConnections;
    }
    public get vpnConnections(): Array<CreateResponseVpnConnection> | undefined {
        return this['vpn_connections'];
    }
    public withRequestId(requestId: string): BatchCreateVpnConnectionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}