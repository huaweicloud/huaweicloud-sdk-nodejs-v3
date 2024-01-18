import { UpdateVpnConnectionRequestBodyContent } from './UpdateVpnConnectionRequestBodyContent';


export class UpdateVpnConnectionRequestBody {
    private 'vpn_connection'?: UpdateVpnConnectionRequestBodyContent;
    public constructor(vpnConnection?: UpdateVpnConnectionRequestBodyContent) { 
        this['vpn_connection'] = vpnConnection;
    }
    public withVpnConnection(vpnConnection: UpdateVpnConnectionRequestBodyContent): UpdateVpnConnectionRequestBody {
        this['vpn_connection'] = vpnConnection;
        return this;
    }
    public set vpnConnection(vpnConnection: UpdateVpnConnectionRequestBodyContent  | undefined) {
        this['vpn_connection'] = vpnConnection;
    }
    public get vpnConnection(): UpdateVpnConnectionRequestBodyContent | undefined {
        return this['vpn_connection'];
    }
}