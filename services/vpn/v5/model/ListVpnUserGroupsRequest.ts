

export class ListVpnUserGroupsRequest {
    private 'vpn_server_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(vpnServerId?: string) { 
        this['vpn_server_id'] = vpnServerId;
    }
    public withVpnServerId(vpnServerId: string): ListVpnUserGroupsRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withLimit(limit: number): ListVpnUserGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpnUserGroupsRequest {
        this['marker'] = marker;
        return this;
    }
}