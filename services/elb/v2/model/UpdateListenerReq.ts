import { InsertHeader } from './InsertHeader';


export class UpdateListenerReq {
    public name?: string;
    public description?: string;
    private 'connection_limit'?: number;
    private 'http2_enable'?: boolean;
    private 'default_pool_id'?: string;
    private 'default_tls_container_ref'?: string;
    private 'client_ca_tls_container_ref'?: string;
    private 'sni_container_refs'?: Array<string>;
    private 'insert_headers'?: InsertHeader;
    private 'tls_ciphers_policy'?: string;
    private 'admin_state_up'?: boolean;
    private 'protection_status'?: UpdateListenerReqProtectionStatusEnum | string;
    private 'protection_reason'?: string;
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
    public set connectionLimit(connectionLimit: number  | undefined) {
        this['connection_limit'] = connectionLimit;
    }
    public get connectionLimit(): number | undefined {
        return this['connection_limit'];
    }
    public withHttp2Enable(http2Enable: boolean): UpdateListenerReq {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean  | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable(): boolean | undefined {
        return this['http2_enable'];
    }
    public withDefaultPoolId(defaultPoolId: string): UpdateListenerReq {
        this['default_pool_id'] = defaultPoolId;
        return this;
    }
    public set defaultPoolId(defaultPoolId: string  | undefined) {
        this['default_pool_id'] = defaultPoolId;
    }
    public get defaultPoolId(): string | undefined {
        return this['default_pool_id'];
    }
    public withDefaultTlsContainerRef(defaultTlsContainerRef: string): UpdateListenerReq {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        return this;
    }
    public set defaultTlsContainerRef(defaultTlsContainerRef: string  | undefined) {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public get defaultTlsContainerRef(): string | undefined {
        return this['default_tls_container_ref'];
    }
    public withClientCaTlsContainerRef(clientCaTlsContainerRef: string): UpdateListenerReq {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        return this;
    }
    public set clientCaTlsContainerRef(clientCaTlsContainerRef: string  | undefined) {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
    }
    public get clientCaTlsContainerRef(): string | undefined {
        return this['client_ca_tls_container_ref'];
    }
    public withSniContainerRefs(sniContainerRefs: Array<string>): UpdateListenerReq {
        this['sni_container_refs'] = sniContainerRefs;
        return this;
    }
    public set sniContainerRefs(sniContainerRefs: Array<string>  | undefined) {
        this['sni_container_refs'] = sniContainerRefs;
    }
    public get sniContainerRefs(): Array<string> | undefined {
        return this['sni_container_refs'];
    }
    public withInsertHeaders(insertHeaders: InsertHeader): UpdateListenerReq {
        this['insert_headers'] = insertHeaders;
        return this;
    }
    public set insertHeaders(insertHeaders: InsertHeader  | undefined) {
        this['insert_headers'] = insertHeaders;
    }
    public get insertHeaders(): InsertHeader | undefined {
        return this['insert_headers'];
    }
    public withTlsCiphersPolicy(tlsCiphersPolicy: string): UpdateListenerReq {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
        return this;
    }
    public set tlsCiphersPolicy(tlsCiphersPolicy: string  | undefined) {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
    }
    public get tlsCiphersPolicy(): string | undefined {
        return this['tls_ciphers_policy'];
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateListenerReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withProtectionStatus(protectionStatus: UpdateListenerReqProtectionStatusEnum | string): UpdateListenerReq {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: UpdateListenerReqProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): UpdateListenerReqProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): UpdateListenerReq {
        this['protection_reason'] = protectionReason;
        return this;
    }
    public set protectionReason(protectionReason: string  | undefined) {
        this['protection_reason'] = protectionReason;
    }
    public get protectionReason(): string | undefined {
        return this['protection_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateListenerReqProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
