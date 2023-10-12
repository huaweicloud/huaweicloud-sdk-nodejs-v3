

export class EsListenerRequest {
    private 'default_tls_container_ref'?: string;
    private 'client_ca_tls_container_ref'?: string;
    public constructor(defaultTlsContainerRef?: string) { 
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public withDefaultTlsContainerRef(defaultTlsContainerRef: string): EsListenerRequest {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        return this;
    }
    public set defaultTlsContainerRef(defaultTlsContainerRef: string  | undefined) {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public get defaultTlsContainerRef(): string | undefined {
        return this['default_tls_container_ref'];
    }
    public withClientCaTlsContainerRef(clientCaTlsContainerRef: string): EsListenerRequest {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        return this;
    }
    public set clientCaTlsContainerRef(clientCaTlsContainerRef: string  | undefined) {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
    }
    public get clientCaTlsContainerRef(): string | undefined {
        return this['client_ca_tls_container_ref'];
    }
}