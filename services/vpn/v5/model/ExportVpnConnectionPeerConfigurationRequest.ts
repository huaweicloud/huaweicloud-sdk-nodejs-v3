import { ExportPeerConfigurationRequestBody } from './ExportPeerConfigurationRequestBody';


export class ExportVpnConnectionPeerConfigurationRequest {
    private 'vpn_connection_id'?: string;
    public body?: ExportPeerConfigurationRequestBody;
    public constructor(vpnConnectionId?: string) { 
        this['vpn_connection_id'] = vpnConnectionId;
    }
    public withVpnConnectionId(vpnConnectionId: string): ExportVpnConnectionPeerConfigurationRequest {
        this['vpn_connection_id'] = vpnConnectionId;
        return this;
    }
    public set vpnConnectionId(vpnConnectionId: string  | undefined) {
        this['vpn_connection_id'] = vpnConnectionId;
    }
    public get vpnConnectionId(): string | undefined {
        return this['vpn_connection_id'];
    }
    public withBody(body: ExportPeerConfigurationRequestBody): ExportVpnConnectionPeerConfigurationRequest {
        this['body'] = body;
        return this;
    }
}