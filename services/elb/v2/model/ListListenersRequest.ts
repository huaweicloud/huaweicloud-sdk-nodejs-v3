

export class ListListenersRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean | undefined;
    public id?: string;
    public name?: string;
    public description?: string;
    private 'default_pool_id'?: string | undefined;
    private 'default_tls_container_ref'?: string | undefined;
    private 'client_ca_tls_container_ref'?: string | undefined;
    public protocol?: string;
    private 'protocol_port'?: number | undefined;
    private 'tls_ciphers_policy'?: string | undefined;
    private 'member_timeout'?: number | undefined;
    private 'client_timeout'?: number | undefined;
    private 'keepalive_timeout'?: number | undefined;
    private 'tls_container_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListListenersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListListenersRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListListenersRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withId(id: string): ListListenersRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListListenersRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListListenersRequest {
        this['description'] = description;
        return this;
    }
    public withDefaultPoolId(defaultPoolId: string): ListListenersRequest {
        this['default_pool_id'] = defaultPoolId;
        return this;
    }
    public set defaultPoolId(defaultPoolId: string | undefined) {
        this['default_pool_id'] = defaultPoolId;
    }
    public get defaultPoolId() {
        return this['default_pool_id'];
    }
    public withDefaultTlsContainerRef(defaultTlsContainerRef: string): ListListenersRequest {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        return this;
    }
    public set defaultTlsContainerRef(defaultTlsContainerRef: string | undefined) {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public get defaultTlsContainerRef() {
        return this['default_tls_container_ref'];
    }
    public withClientCaTlsContainerRef(clientCaTlsContainerRef: string): ListListenersRequest {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        return this;
    }
    public set clientCaTlsContainerRef(clientCaTlsContainerRef: string | undefined) {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
    }
    public get clientCaTlsContainerRef() {
        return this['client_ca_tls_container_ref'];
    }
    public withProtocol(protocol: string): ListListenersRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withProtocolPort(protocolPort: number): ListListenersRequest {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort() {
        return this['protocol_port'];
    }
    public withTlsCiphersPolicy(tlsCiphersPolicy: string): ListListenersRequest {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
        return this;
    }
    public set tlsCiphersPolicy(tlsCiphersPolicy: string | undefined) {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
    }
    public get tlsCiphersPolicy() {
        return this['tls_ciphers_policy'];
    }
    public withMemberTimeout(memberTimeout: number): ListListenersRequest {
        this['member_timeout'] = memberTimeout;
        return this;
    }
    public set memberTimeout(memberTimeout: number | undefined) {
        this['member_timeout'] = memberTimeout;
    }
    public get memberTimeout() {
        return this['member_timeout'];
    }
    public withClientTimeout(clientTimeout: number): ListListenersRequest {
        this['client_timeout'] = clientTimeout;
        return this;
    }
    public set clientTimeout(clientTimeout: number | undefined) {
        this['client_timeout'] = clientTimeout;
    }
    public get clientTimeout() {
        return this['client_timeout'];
    }
    public withKeepaliveTimeout(keepaliveTimeout: number): ListListenersRequest {
        this['keepalive_timeout'] = keepaliveTimeout;
        return this;
    }
    public set keepaliveTimeout(keepaliveTimeout: number | undefined) {
        this['keepalive_timeout'] = keepaliveTimeout;
    }
    public get keepaliveTimeout() {
        return this['keepalive_timeout'];
    }
    public withTlsContainerId(tlsContainerId: string): ListListenersRequest {
        this['tls_container_id'] = tlsContainerId;
        return this;
    }
    public set tlsContainerId(tlsContainerId: string | undefined) {
        this['tls_container_id'] = tlsContainerId;
    }
    public get tlsContainerId() {
        return this['tls_container_id'];
    }
}