import { ImportClientCaCertificateRequestBody } from './ImportClientCaCertificateRequestBody';


export class ImportClientCaRequest {
    private 'vpn_server_id'?: string;
    private 'X-Client-Token'?: string;
    public body?: ImportClientCaCertificateRequestBody;
    public constructor(vpnServerId?: string) { 
        this['vpn_server_id'] = vpnServerId;
    }
    public withVpnServerId(vpnServerId: string): ImportClientCaRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withXClientToken(xClientToken: string): ImportClientCaRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withBody(body: ImportClientCaCertificateRequestBody): ImportClientCaRequest {
        this['body'] = body;
        return this;
    }
}