

export class ListVpnAccessPoliciesRequest {
    private 'vpn_server_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(vpnServerId?: string) { 
        this['vpn_server_id'] = vpnServerId;
    }
    public withVpnServerId(vpnServerId: string): ListVpnAccessPoliciesRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withLimit(limit: number): ListVpnAccessPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpnAccessPoliciesRequest {
        this['marker'] = marker;
        return this;
    }
}