

export class CreateEsListenerRequestBody {
    public protocol?: string;
    private 'protocol_port'?: number;
    private 'server_cert_id'?: string;
    private 'ca_cert_id'?: string;
    public constructor(protocol?: string, protocolPort?: number) { 
        this['protocol'] = protocol;
        this['protocol_port'] = protocolPort;
    }
    public withProtocol(protocol: string): CreateEsListenerRequestBody {
        this['protocol'] = protocol;
        return this;
    }
    public withProtocolPort(protocolPort: number): CreateEsListenerRequestBody {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withServerCertId(serverCertId: string): CreateEsListenerRequestBody {
        this['server_cert_id'] = serverCertId;
        return this;
    }
    public set serverCertId(serverCertId: string  | undefined) {
        this['server_cert_id'] = serverCertId;
    }
    public get serverCertId(): string | undefined {
        return this['server_cert_id'];
    }
    public withCaCertId(caCertId: string): CreateEsListenerRequestBody {
        this['ca_cert_id'] = caCertId;
        return this;
    }
    public set caCertId(caCertId: string  | undefined) {
        this['ca_cert_id'] = caCertId;
    }
    public get caCertId(): string | undefined {
        return this['ca_cert_id'];
    }
}