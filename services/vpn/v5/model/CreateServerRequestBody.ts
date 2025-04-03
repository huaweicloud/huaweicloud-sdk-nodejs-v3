import { CreateServerRequest } from './CreateServerRequest';


export class CreateServerRequestBody {
    private 'vpn_server'?: CreateServerRequest;
    public constructor(vpnServer?: CreateServerRequest) { 
        this['vpn_server'] = vpnServer;
    }
    public withVpnServer(vpnServer: CreateServerRequest): CreateServerRequestBody {
        this['vpn_server'] = vpnServer;
        return this;
    }
    public set vpnServer(vpnServer: CreateServerRequest  | undefined) {
        this['vpn_server'] = vpnServer;
    }
    public get vpnServer(): CreateServerRequest | undefined {
        return this['vpn_server'];
    }
}