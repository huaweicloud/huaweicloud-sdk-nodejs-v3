import { CreateVpnConnectionRequestBodyContent } from './CreateVpnConnectionRequestBodyContent';


export class BatchCreateVpnConnectionRequestBody {
    private 'vpn_connections'?: Array<CreateVpnConnectionRequestBodyContent>;
    public constructor(vpnConnections?: Array<CreateVpnConnectionRequestBodyContent>) { 
        this['vpn_connections'] = vpnConnections;
    }
    public withVpnConnections(vpnConnections: Array<CreateVpnConnectionRequestBodyContent>): BatchCreateVpnConnectionRequestBody {
        this['vpn_connections'] = vpnConnections;
        return this;
    }
    public set vpnConnections(vpnConnections: Array<CreateVpnConnectionRequestBodyContent>  | undefined) {
        this['vpn_connections'] = vpnConnections;
    }
    public get vpnConnections(): Array<CreateVpnConnectionRequestBodyContent> | undefined {
        return this['vpn_connections'];
    }
}