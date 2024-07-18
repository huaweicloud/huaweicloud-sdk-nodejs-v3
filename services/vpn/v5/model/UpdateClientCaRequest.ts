import { UpdateClientCaCertificateRequestBody } from './UpdateClientCaCertificateRequestBody';


export class UpdateClientCaRequest {
    private 'vpn_server_id'?: string;
    private 'client_ca_certificate_id'?: string;
    public body?: UpdateClientCaCertificateRequestBody;
    public constructor(vpnServerId?: string, clientCaCertificateId?: string) { 
        this['vpn_server_id'] = vpnServerId;
        this['client_ca_certificate_id'] = clientCaCertificateId;
    }
    public withVpnServerId(vpnServerId: string): UpdateClientCaRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withClientCaCertificateId(clientCaCertificateId: string): UpdateClientCaRequest {
        this['client_ca_certificate_id'] = clientCaCertificateId;
        return this;
    }
    public set clientCaCertificateId(clientCaCertificateId: string  | undefined) {
        this['client_ca_certificate_id'] = clientCaCertificateId;
    }
    public get clientCaCertificateId(): string | undefined {
        return this['client_ca_certificate_id'];
    }
    public withBody(body: UpdateClientCaCertificateRequestBody): UpdateClientCaRequest {
        this['body'] = body;
        return this;
    }
}