import { ExportClientConfigRequestBody } from './ExportClientConfigRequestBody';


export class ExportClientConfigRequest {
    private 'vpn_server_id'?: string;
    public body?: ExportClientConfigRequestBody;
    public constructor(vpnServerId?: string) { 
        this['vpn_server_id'] = vpnServerId;
    }
    public withVpnServerId(vpnServerId: string): ExportClientConfigRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withBody(body: ExportClientConfigRequestBody): ExportClientConfigRequest {
        this['body'] = body;
        return this;
    }
}