

export class ListVpnUsersRequest {
    private 'vpn_server_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(vpnServerId?: string) { 
        this['vpn_server_id'] = vpnServerId;
    }
    public withVpnServerId(vpnServerId: string): ListVpnUsersRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withLimit(limit: number): ListVpnUsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpnUsersRequest {
        this['marker'] = marker;
        return this;
    }
}