import { UpdateServerRequest } from './UpdateServerRequest';


export class UpdateServerRequestBody {
    private 'vpn_server'?: UpdateServerRequest;
    public constructor() { 
    }
    public withVpnServer(vpnServer: UpdateServerRequest): UpdateServerRequestBody {
        this['vpn_server'] = vpnServer;
        return this;
    }
    public set vpnServer(vpnServer: UpdateServerRequest  | undefined) {
        this['vpn_server'] = vpnServer;
    }
    public get vpnServer(): UpdateServerRequest | undefined {
        return this['vpn_server'];
    }
}