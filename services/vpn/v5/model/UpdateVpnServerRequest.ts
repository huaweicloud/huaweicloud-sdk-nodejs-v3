import { UpdateServerRequestBody } from './UpdateServerRequestBody';


export class UpdateVpnServerRequest {
    private 'vpn_server_id'?: string;
    public body?: UpdateServerRequestBody;
    public constructor(vpnServerId?: string) { 
        this['vpn_server_id'] = vpnServerId;
    }
    public withVpnServerId(vpnServerId: string): UpdateVpnServerRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withBody(body: UpdateServerRequestBody): UpdateVpnServerRequest {
        this['body'] = body;
        return this;
    }
}