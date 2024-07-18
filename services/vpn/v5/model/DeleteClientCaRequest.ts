

export class DeleteClientCaRequest {
    private 'vpn_server_id'?: string;
    private 'client_ca_certificate_id'?: string;
    public constructor(vpnServerId?: string, clientCaCertificateId?: string) { 
        this['vpn_server_id'] = vpnServerId;
        this['client_ca_certificate_id'] = clientCaCertificateId;
    }
    public withVpnServerId(vpnServerId: string): DeleteClientCaRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withClientCaCertificateId(clientCaCertificateId: string): DeleteClientCaRequest {
        this['client_ca_certificate_id'] = clientCaCertificateId;
        return this;
    }
    public set clientCaCertificateId(clientCaCertificateId: string  | undefined) {
        this['client_ca_certificate_id'] = clientCaCertificateId;
    }
    public get clientCaCertificateId(): string | undefined {
        return this['client_ca_certificate_id'];
    }
}