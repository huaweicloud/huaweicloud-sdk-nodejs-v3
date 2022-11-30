import { ListenerInsertHeaders } from './ListenerInsertHeaders';
import { ListenerIpGroup } from './ListenerIpGroup';
import { ListenerQuicConfig } from './ListenerQuicConfig';
import { LoadBalancerRef } from './LoadBalancerRef';
import { Tag } from './Tag';


export class Listener {
    private 'admin_state_up': boolean | undefined;
    private 'client_ca_tls_container_ref': string | undefined;
    private 'connection_limit': number | undefined;
    private 'created_at': string | undefined;
    private 'default_pool_id': string | undefined;
    private 'default_tls_container_ref': string | undefined;
    public description: string;
    private 'http2_enable': boolean | undefined;
    public id: string;
    private 'insert_headers': ListenerInsertHeaders | undefined;
    public loadbalancers: Array<LoadBalancerRef>;
    public name: string;
    private 'project_id': string | undefined;
    public protocol: string;
    private 'protocol_port': number | undefined;
    private 'sni_container_refs': Array<string> | undefined;
    private 'sni_match_algo': string | undefined;
    public tags: Array<Tag>;
    private 'updated_at': string | undefined;
    private 'tls_ciphers_policy': string | undefined;
    private 'security_policy_id': string | undefined;
    private 'enable_member_retry': boolean | undefined;
    private 'keepalive_timeout': number | undefined;
    private 'client_timeout': number | undefined;
    private 'member_timeout': number | undefined;
    public ipgroup: ListenerIpGroup;
    private 'transparent_client_ip_enable': boolean | undefined;
    private 'enhance_l7policy_enable': boolean | undefined;
    private 'quic_config'?: ListenerQuicConfig | undefined;
    public constructor(adminStateUp?: any, clientCaTlsContainerRef?: any, connectionLimit?: any, createdAt?: any, defaultPoolId?: any, defaultTlsContainerRef?: any, description?: any, http2Enable?: any, id?: any, insertHeaders?: any, loadbalancers?: any, name?: any, projectId?: any, protocol?: any, protocolPort?: any, sniContainerRefs?: any, sniMatchAlgo?: any, tags?: any, updatedAt?: any, tlsCiphersPolicy?: any, securityPolicyId?: any, enableMemberRetry?: any, keepaliveTimeout?: any, clientTimeout?: any, memberTimeout?: any, ipgroup?: any, transparentClientIpEnable?: any, enhanceL7policyEnable?: any) { 
        this['admin_state_up'] = adminStateUp;
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        this['connection_limit'] = connectionLimit;
        this['created_at'] = createdAt;
        this['default_pool_id'] = defaultPoolId;
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        this['description'] = description;
        this['http2_enable'] = http2Enable;
        this['id'] = id;
        this['insert_headers'] = insertHeaders;
        this['loadbalancers'] = loadbalancers;
        this['name'] = name;
        this['project_id'] = projectId;
        this['protocol'] = protocol;
        this['protocol_port'] = protocolPort;
        this['sni_container_refs'] = sniContainerRefs;
        this['sni_match_algo'] = sniMatchAlgo;
        this['tags'] = tags;
        this['updated_at'] = updatedAt;
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
        this['security_policy_id'] = securityPolicyId;
        this['enable_member_retry'] = enableMemberRetry;
        this['keepalive_timeout'] = keepaliveTimeout;
        this['client_timeout'] = clientTimeout;
        this['member_timeout'] = memberTimeout;
        this['ipgroup'] = ipgroup;
        this['transparent_client_ip_enable'] = transparentClientIpEnable;
        this['enhance_l7policy_enable'] = enhanceL7policyEnable;
    }
    public withAdminStateUp(adminStateUp: boolean): Listener {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withClientCaTlsContainerRef(clientCaTlsContainerRef: string): Listener {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        return this;
    }
    public set clientCaTlsContainerRef(clientCaTlsContainerRef: string | undefined) {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
    }
    public get clientCaTlsContainerRef() {
        return this['client_ca_tls_container_ref'];
    }
    public withConnectionLimit(connectionLimit: number): Listener {
        this['connection_limit'] = connectionLimit;
        return this;
    }
    public set connectionLimit(connectionLimit: number | undefined) {
        this['connection_limit'] = connectionLimit;
    }
    public get connectionLimit() {
        return this['connection_limit'];
    }
    public withCreatedAt(createdAt: string): Listener {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withDefaultPoolId(defaultPoolId: string): Listener {
        this['default_pool_id'] = defaultPoolId;
        return this;
    }
    public set defaultPoolId(defaultPoolId: string | undefined) {
        this['default_pool_id'] = defaultPoolId;
    }
    public get defaultPoolId() {
        return this['default_pool_id'];
    }
    public withDefaultTlsContainerRef(defaultTlsContainerRef: string): Listener {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        return this;
    }
    public set defaultTlsContainerRef(defaultTlsContainerRef: string | undefined) {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public get defaultTlsContainerRef() {
        return this['default_tls_container_ref'];
    }
    public withDescription(description: string): Listener {
        this['description'] = description;
        return this;
    }
    public withHttp2Enable(http2Enable: boolean): Listener {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable() {
        return this['http2_enable'];
    }
    public withId(id: string): Listener {
        this['id'] = id;
        return this;
    }
    public withInsertHeaders(insertHeaders: ListenerInsertHeaders): Listener {
        this['insert_headers'] = insertHeaders;
        return this;
    }
    public set insertHeaders(insertHeaders: ListenerInsertHeaders | undefined) {
        this['insert_headers'] = insertHeaders;
    }
    public get insertHeaders() {
        return this['insert_headers'];
    }
    public withLoadbalancers(loadbalancers: Array<LoadBalancerRef>): Listener {
        this['loadbalancers'] = loadbalancers;
        return this;
    }
    public withName(name: string): Listener {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): Listener {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProtocol(protocol: string): Listener {
        this['protocol'] = protocol;
        return this;
    }
    public withProtocolPort(protocolPort: number): Listener {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort() {
        return this['protocol_port'];
    }
    public withSniContainerRefs(sniContainerRefs: Array<string>): Listener {
        this['sni_container_refs'] = sniContainerRefs;
        return this;
    }
    public set sniContainerRefs(sniContainerRefs: Array<string> | undefined) {
        this['sni_container_refs'] = sniContainerRefs;
    }
    public get sniContainerRefs() {
        return this['sni_container_refs'];
    }
    public withSniMatchAlgo(sniMatchAlgo: string): Listener {
        this['sni_match_algo'] = sniMatchAlgo;
        return this;
    }
    public set sniMatchAlgo(sniMatchAlgo: string | undefined) {
        this['sni_match_algo'] = sniMatchAlgo;
    }
    public get sniMatchAlgo() {
        return this['sni_match_algo'];
    }
    public withTags(tags: Array<Tag>): Listener {
        this['tags'] = tags;
        return this;
    }
    public withUpdatedAt(updatedAt: string): Listener {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withTlsCiphersPolicy(tlsCiphersPolicy: string): Listener {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
        return this;
    }
    public set tlsCiphersPolicy(tlsCiphersPolicy: string | undefined) {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
    }
    public get tlsCiphersPolicy() {
        return this['tls_ciphers_policy'];
    }
    public withSecurityPolicyId(securityPolicyId: string): Listener {
        this['security_policy_id'] = securityPolicyId;
        return this;
    }
    public set securityPolicyId(securityPolicyId: string | undefined) {
        this['security_policy_id'] = securityPolicyId;
    }
    public get securityPolicyId() {
        return this['security_policy_id'];
    }
    public withEnableMemberRetry(enableMemberRetry: boolean): Listener {
        this['enable_member_retry'] = enableMemberRetry;
        return this;
    }
    public set enableMemberRetry(enableMemberRetry: boolean | undefined) {
        this['enable_member_retry'] = enableMemberRetry;
    }
    public get enableMemberRetry() {
        return this['enable_member_retry'];
    }
    public withKeepaliveTimeout(keepaliveTimeout: number): Listener {
        this['keepalive_timeout'] = keepaliveTimeout;
        return this;
    }
    public set keepaliveTimeout(keepaliveTimeout: number | undefined) {
        this['keepalive_timeout'] = keepaliveTimeout;
    }
    public get keepaliveTimeout() {
        return this['keepalive_timeout'];
    }
    public withClientTimeout(clientTimeout: number): Listener {
        this['client_timeout'] = clientTimeout;
        return this;
    }
    public set clientTimeout(clientTimeout: number | undefined) {
        this['client_timeout'] = clientTimeout;
    }
    public get clientTimeout() {
        return this['client_timeout'];
    }
    public withMemberTimeout(memberTimeout: number): Listener {
        this['member_timeout'] = memberTimeout;
        return this;
    }
    public set memberTimeout(memberTimeout: number | undefined) {
        this['member_timeout'] = memberTimeout;
    }
    public get memberTimeout() {
        return this['member_timeout'];
    }
    public withIpgroup(ipgroup: ListenerIpGroup): Listener {
        this['ipgroup'] = ipgroup;
        return this;
    }
    public withTransparentClientIpEnable(transparentClientIpEnable: boolean): Listener {
        this['transparent_client_ip_enable'] = transparentClientIpEnable;
        return this;
    }
    public set transparentClientIpEnable(transparentClientIpEnable: boolean | undefined) {
        this['transparent_client_ip_enable'] = transparentClientIpEnable;
    }
    public get transparentClientIpEnable() {
        return this['transparent_client_ip_enable'];
    }
    public withEnhanceL7policyEnable(enhanceL7policyEnable: boolean): Listener {
        this['enhance_l7policy_enable'] = enhanceL7policyEnable;
        return this;
    }
    public set enhanceL7policyEnable(enhanceL7policyEnable: boolean | undefined) {
        this['enhance_l7policy_enable'] = enhanceL7policyEnable;
    }
    public get enhanceL7policyEnable() {
        return this['enhance_l7policy_enable'];
    }
    public withQuicConfig(quicConfig: ListenerQuicConfig): Listener {
        this['quic_config'] = quicConfig;
        return this;
    }
    public set quicConfig(quicConfig: ListenerQuicConfig | undefined) {
        this['quic_config'] = quicConfig;
    }
    public get quicConfig() {
        return this['quic_config'];
    }
}