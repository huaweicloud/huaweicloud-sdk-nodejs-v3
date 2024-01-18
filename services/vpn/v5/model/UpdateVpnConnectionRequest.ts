import { UpdateVpnConnectionRequestBody } from './UpdateVpnConnectionRequestBody';


export class UpdateVpnConnectionRequest {
    private 'vpn_connection_id'?: string;
    public body?: UpdateVpnConnectionRequestBody;
    public constructor(vpnConnectionId?: string) { 
        this['vpn_connection_id'] = vpnConnectionId;
    }
    public withVpnConnectionId(vpnConnectionId: string): UpdateVpnConnectionRequest {
        this['vpn_connection_id'] = vpnConnectionId;
        return this;
    }
    public set vpnConnectionId(vpnConnectionId: string  | undefined) {
        this['vpn_connection_id'] = vpnConnectionId;
    }
    public get vpnConnectionId(): string | undefined {
        return this['vpn_connection_id'];
    }
    public withBody(body: UpdateVpnConnectionRequestBody): UpdateVpnConnectionRequest {
        this['body'] = body;
        return this;
    }
}