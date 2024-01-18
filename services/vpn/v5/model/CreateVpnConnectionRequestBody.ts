import { CreateVpnConnectionRequestBodyContent } from './CreateVpnConnectionRequestBodyContent';


export class CreateVpnConnectionRequestBody {
    private 'vpn_connection'?: CreateVpnConnectionRequestBodyContent;
    public constructor(vpnConnection?: CreateVpnConnectionRequestBodyContent) { 
        this['vpn_connection'] = vpnConnection;
    }
    public withVpnConnection(vpnConnection: CreateVpnConnectionRequestBodyContent): CreateVpnConnectionRequestBody {
        this['vpn_connection'] = vpnConnection;
        return this;
    }
    public set vpnConnection(vpnConnection: CreateVpnConnectionRequestBodyContent  | undefined) {
        this['vpn_connection'] = vpnConnection;
    }
    public get vpnConnection(): CreateVpnConnectionRequestBodyContent | undefined {
        return this['vpn_connection'];
    }
}