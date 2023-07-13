import { InsertHeader } from './InsertHeader';


export class UpdateListenerReq {
    public name?: string;
    public description?: string;
    private 'connection_limit'?: number | undefined;
    private 'http2_enable'?: boolean | undefined;
    private 'default_pool_id'?: string | undefined;
    private 'default_tls_container_ref'?: string | undefined;
    private 'client_ca_tls_container_ref'?: string | undefined;
    private 'sni_container_refs'?: Array<string> | undefined;
    private 'insert_headers'?: InsertHeader | undefined;
    private 'tls_ciphers_policy'?: string | undefined;
    private 'admin_state_up'?: boolean | undefined;
    public constructor() { 
    }
    public withName(name: string): UpdateListenerReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateListenerReq {
        this['description'] = description;
        return this;
    }
    public withConnectionLimit(connectionLimit: number): UpdateListenerReq {
        this['connection_limit'] = connectionLimit;
        return this;
    }
    public set connectionLimit(connectionLimit: number | undefined) {
        this['connection_limit'] = connectionLimit;
    }
    public get connectionLimit() {
        return this['connection_limit'];
    }
    public withHttp2Enable(http2Enable: boolean): UpdateListenerReq {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable() {
        return this['http2_enable'];
    }
    public withDefaultPoolId(defaultPoolId: string): UpdateListenerReq {
        this['default_pool_id'] = defaultPoolId;
        return this;
    }
    public set defaultPoolId(defaultPoolId: string | undefined) {
        this['default_pool_id'] = defaultPoolId;
    }
    public get defaultPoolId() {
        return this['default_pool_id'];
    }
    public withDefaultTlsContainerRef(defaultTlsContainerRef: string): UpdateListenerReq {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        return this;
    }
    public set defaultTlsContainerRef(defaultTlsContainerRef: string | undefined) {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public get defaultTlsContainerRef() {
        return this['default_tls_container_ref'];
    }
    public withClientCaTlsContainerRef(clientCaTlsContainerRef: string): UpdateListenerReq {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        return this;
    }
    public set clientCaTlsContainerRef(clientCaTlsContainerRef: string | undefined) {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
    }
    public get clientCaTlsContainerRef() {
        return this['client_ca_tls_container_ref'];
    }
    public withSniContainerRefs(sniContainerRefs: Array<string>): UpdateListenerReq {
        this['sni_container_refs'] = sniContainerRefs;
        return this;
    }
    public set sniContainerRefs(sniContainerRefs: Array<string> | undefined) {
        this['sni_container_refs'] = sniContainerRefs;
    }
    public get sniContainerRefs() {
        return this['sni_container_refs'];
    }
    public withInsertHeaders(insertHeaders: InsertHeader): UpdateListenerReq {
        this['insert_headers'] = insertHeaders;
        return this;
    }
    public set insertHeaders(insertHeaders: InsertHeader | undefined) {
        this['insert_headers'] = insertHeaders;
    }
    public get insertHeaders() {
        return this['insert_headers'];
    }
    public withTlsCiphersPolicy(tlsCiphersPolicy: string): UpdateListenerReq {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
        return this;
    }
    public set tlsCiphersPolicy(tlsCiphersPolicy: string | undefined) {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
    }
    public get tlsCiphersPolicy() {
        return this['tls_ciphers_policy'];
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateListenerReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
}