import { EsIpgroupResource } from './EsIpgroupResource';


export class EsListenerResponse {
    public protocol?: string;
    public id?: string;
    public name?: string;
    private 'protocol_port'?: string;
    private 'default_tls_container_ref'?: string;
    private 'client_ca_tls_container_ref'?: string;
    public ipgroup?: EsIpgroupResource;
    public constructor() { 
    }
    public withProtocol(protocol: string): EsListenerResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withId(id: string): EsListenerResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EsListenerResponse {
        this['name'] = name;
        return this;
    }
    public withProtocolPort(protocolPort: string): EsListenerResponse {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: string  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): string | undefined {
        return this['protocol_port'];
    }
    public withDefaultTlsContainerRef(defaultTlsContainerRef: string): EsListenerResponse {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        return this;
    }
    public set defaultTlsContainerRef(defaultTlsContainerRef: string  | undefined) {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public get defaultTlsContainerRef(): string | undefined {
        return this['default_tls_container_ref'];
    }
    public withClientCaTlsContainerRef(clientCaTlsContainerRef: string): EsListenerResponse {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        return this;
    }
    public set clientCaTlsContainerRef(clientCaTlsContainerRef: string  | undefined) {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
    }
    public get clientCaTlsContainerRef(): string | undefined {
        return this['client_ca_tls_container_ref'];
    }
    public withIpgroup(ipgroup: EsIpgroupResource): EsListenerResponse {
        this['ipgroup'] = ipgroup;
        return this;
    }
}