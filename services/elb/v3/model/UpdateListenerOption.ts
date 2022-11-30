import { ListenerInsertHeaders } from './ListenerInsertHeaders';
import { UpdateListenerIpGroupOption } from './UpdateListenerIpGroupOption';
import { UpdateListenerQuicConfigOption } from './UpdateListenerQuicConfigOption';


export class UpdateListenerOption {
    private 'admin_state_up'?: boolean | undefined;
    private 'client_ca_tls_container_ref'?: string | undefined;
    private 'default_pool_id'?: string | undefined;
    private 'default_tls_container_ref'?: string | undefined;
    public description?: string;
    private 'http2_enable'?: boolean | undefined;
    private 'insert_headers'?: ListenerInsertHeaders | undefined;
    public name?: string;
    private 'sni_container_refs'?: Array<string> | undefined;
    private 'sni_match_algo'?: string | undefined;
    private 'tls_ciphers_policy'?: string | undefined;
    private 'security_policy_id'?: string | undefined;
    private 'enable_member_retry'?: boolean | undefined;
    private 'member_timeout'?: number | undefined;
    private 'client_timeout'?: number | undefined;
    private 'keepalive_timeout'?: number | undefined;
    public ipgroup?: UpdateListenerIpGroupOption;
    private 'transparent_client_ip_enable'?: boolean | undefined;
    private 'enhance_l7policy_enable'?: boolean | undefined;
    private 'quic_config'?: UpdateListenerQuicConfigOption | undefined;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateListenerOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withClientCaTlsContainerRef(clientCaTlsContainerRef: string): UpdateListenerOption {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        return this;
    }
    public set clientCaTlsContainerRef(clientCaTlsContainerRef: string | undefined) {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
    }
    public get clientCaTlsContainerRef() {
        return this['client_ca_tls_container_ref'];
    }
    public withDefaultPoolId(defaultPoolId: string): UpdateListenerOption {
        this['default_pool_id'] = defaultPoolId;
        return this;
    }
    public set defaultPoolId(defaultPoolId: string | undefined) {
        this['default_pool_id'] = defaultPoolId;
    }
    public get defaultPoolId() {
        return this['default_pool_id'];
    }
    public withDefaultTlsContainerRef(defaultTlsContainerRef: string): UpdateListenerOption {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        return this;
    }
    public set defaultTlsContainerRef(defaultTlsContainerRef: string | undefined) {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public get defaultTlsContainerRef() {
        return this['default_tls_container_ref'];
    }
    public withDescription(description: string): UpdateListenerOption {
        this['description'] = description;
        return this;
    }
    public withHttp2Enable(http2Enable: boolean): UpdateListenerOption {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable() {
        return this['http2_enable'];
    }
    public withInsertHeaders(insertHeaders: ListenerInsertHeaders): UpdateListenerOption {
        this['insert_headers'] = insertHeaders;
        return this;
    }
    public set insertHeaders(insertHeaders: ListenerInsertHeaders | undefined) {
        this['insert_headers'] = insertHeaders;
    }
    public get insertHeaders() {
        return this['insert_headers'];
    }
    public withName(name: string): UpdateListenerOption {
        this['name'] = name;
        return this;
    }
    public withSniContainerRefs(sniContainerRefs: Array<string>): UpdateListenerOption {
        this['sni_container_refs'] = sniContainerRefs;
        return this;
    }
    public set sniContainerRefs(sniContainerRefs: Array<string> | undefined) {
        this['sni_container_refs'] = sniContainerRefs;
    }
    public get sniContainerRefs() {
        return this['sni_container_refs'];
    }
    public withSniMatchAlgo(sniMatchAlgo: string): UpdateListenerOption {
        this['sni_match_algo'] = sniMatchAlgo;
        return this;
    }
    public set sniMatchAlgo(sniMatchAlgo: string | undefined) {
        this['sni_match_algo'] = sniMatchAlgo;
    }
    public get sniMatchAlgo() {
        return this['sni_match_algo'];
    }
    public withTlsCiphersPolicy(tlsCiphersPolicy: string): UpdateListenerOption {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
        return this;
    }
    public set tlsCiphersPolicy(tlsCiphersPolicy: string | undefined) {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
    }
    public get tlsCiphersPolicy() {
        return this['tls_ciphers_policy'];
    }
    public withSecurityPolicyId(securityPolicyId: string): UpdateListenerOption {
        this['security_policy_id'] = securityPolicyId;
        return this;
    }
    public set securityPolicyId(securityPolicyId: string | undefined) {
        this['security_policy_id'] = securityPolicyId;
    }
    public get securityPolicyId() {
        return this['security_policy_id'];
    }
    public withEnableMemberRetry(enableMemberRetry: boolean): UpdateListenerOption {
        this['enable_member_retry'] = enableMemberRetry;
        return this;
    }
    public set enableMemberRetry(enableMemberRetry: boolean | undefined) {
        this['enable_member_retry'] = enableMemberRetry;
    }
    public get enableMemberRetry() {
        return this['enable_member_retry'];
    }
    public withMemberTimeout(memberTimeout: number): UpdateListenerOption {
        this['member_timeout'] = memberTimeout;
        return this;
    }
    public set memberTimeout(memberTimeout: number | undefined) {
        this['member_timeout'] = memberTimeout;
    }
    public get memberTimeout() {
        return this['member_timeout'];
    }
    public withClientTimeout(clientTimeout: number): UpdateListenerOption {
        this['client_timeout'] = clientTimeout;
        return this;
    }
    public set clientTimeout(clientTimeout: number | undefined) {
        this['client_timeout'] = clientTimeout;
    }
    public get clientTimeout() {
        return this['client_timeout'];
    }
    public withKeepaliveTimeout(keepaliveTimeout: number): UpdateListenerOption {
        this['keepalive_timeout'] = keepaliveTimeout;
        return this;
    }
    public set keepaliveTimeout(keepaliveTimeout: number | undefined) {
        this['keepalive_timeout'] = keepaliveTimeout;
    }
    public get keepaliveTimeout() {
        return this['keepalive_timeout'];
    }
    public withIpgroup(ipgroup: UpdateListenerIpGroupOption): UpdateListenerOption {
        this['ipgroup'] = ipgroup;
        return this;
    }
    public withTransparentClientIpEnable(transparentClientIpEnable: boolean): UpdateListenerOption {
        this['transparent_client_ip_enable'] = transparentClientIpEnable;
        return this;
    }
    public set transparentClientIpEnable(transparentClientIpEnable: boolean | undefined) {
        this['transparent_client_ip_enable'] = transparentClientIpEnable;
    }
    public get transparentClientIpEnable() {
        return this['transparent_client_ip_enable'];
    }
    public withEnhanceL7policyEnable(enhanceL7policyEnable: boolean): UpdateListenerOption {
        this['enhance_l7policy_enable'] = enhanceL7policyEnable;
        return this;
    }
    public set enhanceL7policyEnable(enhanceL7policyEnable: boolean | undefined) {
        this['enhance_l7policy_enable'] = enhanceL7policyEnable;
    }
    public get enhanceL7policyEnable() {
        return this['enhance_l7policy_enable'];
    }
    public withQuicConfig(quicConfig: UpdateListenerQuicConfigOption): UpdateListenerOption {
        this['quic_config'] = quicConfig;
        return this;
    }
    public set quicConfig(quicConfig: UpdateListenerQuicConfigOption | undefined) {
        this['quic_config'] = quicConfig;
    }
    public get quicConfig() {
        return this['quic_config'];
    }
}