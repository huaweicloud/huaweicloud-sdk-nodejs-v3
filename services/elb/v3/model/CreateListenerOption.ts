import { CreateListenerIpGroupOption } from './CreateListenerIpGroupOption';
import { CreateListenerQuicConfigOption } from './CreateListenerQuicConfigOption';
import { ListenerInsertHeaders } from './ListenerInsertHeaders';
import { Tag } from './Tag';


export class CreateListenerOption {
    private 'admin_state_up'?: boolean | undefined;
    private 'default_pool_id'?: string | undefined;
    private 'client_ca_tls_container_ref'?: string | undefined;
    private 'default_tls_container_ref'?: string | undefined;
    public description?: string;
    private 'http2_enable'?: boolean | undefined;
    private 'insert_headers'?: ListenerInsertHeaders | undefined;
    private 'loadbalancer_id': string | undefined;
    public name?: string;
    private 'project_id'?: string | undefined;
    public protocol: string;
    private 'protocol_port': number | undefined;
    private 'sni_container_refs'?: Array<string> | undefined;
    private 'sni_match_algo'?: string | undefined;
    public tags?: Array<Tag>;
    private 'tls_ciphers_policy'?: string | undefined;
    private 'security_policy_id'?: string | undefined;
    private 'enable_member_retry'?: boolean | undefined;
    private 'keepalive_timeout'?: number | undefined;
    private 'client_timeout'?: number | undefined;
    private 'member_timeout'?: number | undefined;
    public ipgroup?: CreateListenerIpGroupOption;
    private 'transparent_client_ip_enable'?: boolean | undefined;
    private 'enhance_l7policy_enable'?: boolean | undefined;
    private 'quic_config'?: CreateListenerQuicConfigOption | undefined;
    public constructor(loadbalancerId?: any, protocol?: any, protocolPort?: any) { 
        this['loadbalancer_id'] = loadbalancerId;
        this['protocol'] = protocol;
        this['protocol_port'] = protocolPort;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateListenerOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withDefaultPoolId(defaultPoolId: string): CreateListenerOption {
        this['default_pool_id'] = defaultPoolId;
        return this;
    }
    public set defaultPoolId(defaultPoolId: string | undefined) {
        this['default_pool_id'] = defaultPoolId;
    }
    public get defaultPoolId() {
        return this['default_pool_id'];
    }
    public withClientCaTlsContainerRef(clientCaTlsContainerRef: string): CreateListenerOption {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        return this;
    }
    public set clientCaTlsContainerRef(clientCaTlsContainerRef: string | undefined) {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
    }
    public get clientCaTlsContainerRef() {
        return this['client_ca_tls_container_ref'];
    }
    public withDefaultTlsContainerRef(defaultTlsContainerRef: string): CreateListenerOption {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        return this;
    }
    public set defaultTlsContainerRef(defaultTlsContainerRef: string | undefined) {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public get defaultTlsContainerRef() {
        return this['default_tls_container_ref'];
    }
    public withDescription(description: string): CreateListenerOption {
        this['description'] = description;
        return this;
    }
    public withHttp2Enable(http2Enable: boolean): CreateListenerOption {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable() {
        return this['http2_enable'];
    }
    public withInsertHeaders(insertHeaders: ListenerInsertHeaders): CreateListenerOption {
        this['insert_headers'] = insertHeaders;
        return this;
    }
    public set insertHeaders(insertHeaders: ListenerInsertHeaders | undefined) {
        this['insert_headers'] = insertHeaders;
    }
    public get insertHeaders() {
        return this['insert_headers'];
    }
    public withLoadbalancerId(loadbalancerId: string): CreateListenerOption {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withName(name: string): CreateListenerOption {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): CreateListenerOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProtocol(protocol: string): CreateListenerOption {
        this['protocol'] = protocol;
        return this;
    }
    public withProtocolPort(protocolPort: number): CreateListenerOption {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort() {
        return this['protocol_port'];
    }
    public withSniContainerRefs(sniContainerRefs: Array<string>): CreateListenerOption {
        this['sni_container_refs'] = sniContainerRefs;
        return this;
    }
    public set sniContainerRefs(sniContainerRefs: Array<string> | undefined) {
        this['sni_container_refs'] = sniContainerRefs;
    }
    public get sniContainerRefs() {
        return this['sni_container_refs'];
    }
    public withSniMatchAlgo(sniMatchAlgo: string): CreateListenerOption {
        this['sni_match_algo'] = sniMatchAlgo;
        return this;
    }
    public set sniMatchAlgo(sniMatchAlgo: string | undefined) {
        this['sni_match_algo'] = sniMatchAlgo;
    }
    public get sniMatchAlgo() {
        return this['sni_match_algo'];
    }
    public withTags(tags: Array<Tag>): CreateListenerOption {
        this['tags'] = tags;
        return this;
    }
    public withTlsCiphersPolicy(tlsCiphersPolicy: string): CreateListenerOption {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
        return this;
    }
    public set tlsCiphersPolicy(tlsCiphersPolicy: string | undefined) {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
    }
    public get tlsCiphersPolicy() {
        return this['tls_ciphers_policy'];
    }
    public withSecurityPolicyId(securityPolicyId: string): CreateListenerOption {
        this['security_policy_id'] = securityPolicyId;
        return this;
    }
    public set securityPolicyId(securityPolicyId: string | undefined) {
        this['security_policy_id'] = securityPolicyId;
    }
    public get securityPolicyId() {
        return this['security_policy_id'];
    }
    public withEnableMemberRetry(enableMemberRetry: boolean): CreateListenerOption {
        this['enable_member_retry'] = enableMemberRetry;
        return this;
    }
    public set enableMemberRetry(enableMemberRetry: boolean | undefined) {
        this['enable_member_retry'] = enableMemberRetry;
    }
    public get enableMemberRetry() {
        return this['enable_member_retry'];
    }
    public withKeepaliveTimeout(keepaliveTimeout: number): CreateListenerOption {
        this['keepalive_timeout'] = keepaliveTimeout;
        return this;
    }
    public set keepaliveTimeout(keepaliveTimeout: number | undefined) {
        this['keepalive_timeout'] = keepaliveTimeout;
    }
    public get keepaliveTimeout() {
        return this['keepalive_timeout'];
    }
    public withClientTimeout(clientTimeout: number): CreateListenerOption {
        this['client_timeout'] = clientTimeout;
        return this;
    }
    public set clientTimeout(clientTimeout: number | undefined) {
        this['client_timeout'] = clientTimeout;
    }
    public get clientTimeout() {
        return this['client_timeout'];
    }
    public withMemberTimeout(memberTimeout: number): CreateListenerOption {
        this['member_timeout'] = memberTimeout;
        return this;
    }
    public set memberTimeout(memberTimeout: number | undefined) {
        this['member_timeout'] = memberTimeout;
    }
    public get memberTimeout() {
        return this['member_timeout'];
    }
    public withIpgroup(ipgroup: CreateListenerIpGroupOption): CreateListenerOption {
        this['ipgroup'] = ipgroup;
        return this;
    }
    public withTransparentClientIpEnable(transparentClientIpEnable: boolean): CreateListenerOption {
        this['transparent_client_ip_enable'] = transparentClientIpEnable;
        return this;
    }
    public set transparentClientIpEnable(transparentClientIpEnable: boolean | undefined) {
        this['transparent_client_ip_enable'] = transparentClientIpEnable;
    }
    public get transparentClientIpEnable() {
        return this['transparent_client_ip_enable'];
    }
    public withEnhanceL7policyEnable(enhanceL7policyEnable: boolean): CreateListenerOption {
        this['enhance_l7policy_enable'] = enhanceL7policyEnable;
        return this;
    }
    public set enhanceL7policyEnable(enhanceL7policyEnable: boolean | undefined) {
        this['enhance_l7policy_enable'] = enhanceL7policyEnable;
    }
    public get enhanceL7policyEnable() {
        return this['enhance_l7policy_enable'];
    }
    public withQuicConfig(quicConfig: CreateListenerQuicConfigOption): CreateListenerOption {
        this['quic_config'] = quicConfig;
        return this;
    }
    public set quicConfig(quicConfig: CreateListenerQuicConfigOption | undefined) {
        this['quic_config'] = quicConfig;
    }
    public get quicConfig() {
        return this['quic_config'];
    }
}