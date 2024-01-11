import { InsertHeader } from './InsertHeader';
import { ResourceList } from './ResourceList';


export class ListenerResp {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'admin_state_up'?: boolean;
    public loadbalancers?: Array<ResourceList>;
    private 'connection_limit'?: number;
    private 'http2_enable'?: boolean;
    public protocol?: ListenerRespProtocolEnum | string;
    private 'protocol_port'?: number;
    private 'default_pool_id'?: string;
    private 'default_tls_container_ref'?: string;
    private 'client_ca_tls_container_ref'?: string;
    private 'sni_container_refs'?: Array<string>;
    public tags?: Array<string>;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'insert_headers'?: InsertHeader;
    private 'project_id'?: string;
    private 'tls_ciphers_policy'?: string;
    private 'protection_status'?: ListenerRespProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    public constructor(id?: string, tenantId?: string, name?: string, description?: string, adminStateUp?: boolean, loadbalancers?: Array<ResourceList>, connectionLimit?: number, http2Enable?: boolean, protocol?: string, protocolPort?: number, defaultPoolId?: string, defaultTlsContainerRef?: string, clientCaTlsContainerRef?: string, sniContainerRefs?: Array<string>, tags?: Array<string>, createdAt?: string, updatedAt?: string, insertHeaders?: InsertHeader, projectId?: string, tlsCiphersPolicy?: string, protectionStatus?: string, protectionReason?: string) { 
        this['id'] = id;
        this['tenant_id'] = tenantId;
        this['name'] = name;
        this['description'] = description;
        this['admin_state_up'] = adminStateUp;
        this['loadbalancers'] = loadbalancers;
        this['connection_limit'] = connectionLimit;
        this['http2_enable'] = http2Enable;
        this['protocol'] = protocol;
        this['protocol_port'] = protocolPort;
        this['default_pool_id'] = defaultPoolId;
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        this['sni_container_refs'] = sniContainerRefs;
        this['tags'] = tags;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['insert_headers'] = insertHeaders;
        this['project_id'] = projectId;
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
        this['protection_status'] = protectionStatus;
        this['protection_reason'] = protectionReason;
    }
    public withId(id: string): ListenerResp {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): ListenerResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): ListenerResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListenerResp {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListenerResp {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withLoadbalancers(loadbalancers: Array<ResourceList>): ListenerResp {
        this['loadbalancers'] = loadbalancers;
        return this;
    }
    public withConnectionLimit(connectionLimit: number): ListenerResp {
        this['connection_limit'] = connectionLimit;
        return this;
    }
    public set connectionLimit(connectionLimit: number  | undefined) {
        this['connection_limit'] = connectionLimit;
    }
    public get connectionLimit(): number | undefined {
        return this['connection_limit'];
    }
    public withHttp2Enable(http2Enable: boolean): ListenerResp {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean  | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable(): boolean | undefined {
        return this['http2_enable'];
    }
    public withProtocol(protocol: ListenerRespProtocolEnum | string): ListenerResp {
        this['protocol'] = protocol;
        return this;
    }
    public withProtocolPort(protocolPort: number): ListenerResp {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withDefaultPoolId(defaultPoolId: string): ListenerResp {
        this['default_pool_id'] = defaultPoolId;
        return this;
    }
    public set defaultPoolId(defaultPoolId: string  | undefined) {
        this['default_pool_id'] = defaultPoolId;
    }
    public get defaultPoolId(): string | undefined {
        return this['default_pool_id'];
    }
    public withDefaultTlsContainerRef(defaultTlsContainerRef: string): ListenerResp {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        return this;
    }
    public set defaultTlsContainerRef(defaultTlsContainerRef: string  | undefined) {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public get defaultTlsContainerRef(): string | undefined {
        return this['default_tls_container_ref'];
    }
    public withClientCaTlsContainerRef(clientCaTlsContainerRef: string): ListenerResp {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        return this;
    }
    public set clientCaTlsContainerRef(clientCaTlsContainerRef: string  | undefined) {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
    }
    public get clientCaTlsContainerRef(): string | undefined {
        return this['client_ca_tls_container_ref'];
    }
    public withSniContainerRefs(sniContainerRefs: Array<string>): ListenerResp {
        this['sni_container_refs'] = sniContainerRefs;
        return this;
    }
    public set sniContainerRefs(sniContainerRefs: Array<string>  | undefined) {
        this['sni_container_refs'] = sniContainerRefs;
    }
    public get sniContainerRefs(): Array<string> | undefined {
        return this['sni_container_refs'];
    }
    public withTags(tags: Array<string>): ListenerResp {
        this['tags'] = tags;
        return this;
    }
    public withCreatedAt(createdAt: string): ListenerResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ListenerResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withInsertHeaders(insertHeaders: InsertHeader): ListenerResp {
        this['insert_headers'] = insertHeaders;
        return this;
    }
    public set insertHeaders(insertHeaders: InsertHeader  | undefined) {
        this['insert_headers'] = insertHeaders;
    }
    public get insertHeaders(): InsertHeader | undefined {
        return this['insert_headers'];
    }
    public withProjectId(projectId: string): ListenerResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTlsCiphersPolicy(tlsCiphersPolicy: string): ListenerResp {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
        return this;
    }
    public set tlsCiphersPolicy(tlsCiphersPolicy: string  | undefined) {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
    }
    public get tlsCiphersPolicy(): string | undefined {
        return this['tls_ciphers_policy'];
    }
    public withProtectionStatus(protectionStatus: ListenerRespProtectionStatusEnum | string): ListenerResp {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: ListenerRespProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): ListenerRespProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): ListenerResp {
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
export enum ListenerRespProtocolEnum {
    UDP = 'UDP',
    TCP = 'TCP',
    HTTP = 'HTTP',
    TERMINATED_HTTPS = 'TERMINATED_HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum ListenerRespProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
