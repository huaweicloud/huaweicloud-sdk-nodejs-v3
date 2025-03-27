

export class ShowVpnConnectionLogRequest {
    private 'vpn_connection_id'?: string;
    public constructor(vpnConnectionId?: string) { 
        this['vpn_connection_id'] = vpnConnectionId;
    }
    public withVpnConnectionId(vpnConnectionId: string): ShowVpnConnectionLogRequest {
        this['vpn_connection_id'] = vpnConnectionId;
        return this;
    }
    public set vpnConnectionId(vpnConnectionId: string  | undefined) {
        this['vpn_connection_id'] = vpnConnectionId;
    }
    public get vpnConnectionId(): string | undefined {
        return this['vpn_connection_id'];
    }
}