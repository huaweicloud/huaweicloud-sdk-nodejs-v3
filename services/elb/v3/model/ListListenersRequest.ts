

export class ListListenersRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean | undefined;
    private 'protocol_port'?: Array<string> | undefined;
    public protocol?: Array<string>;
    public description?: Array<string>;
    private 'default_tls_container_ref'?: Array<string> | undefined;
    private 'client_ca_tls_container_ref'?: Array<string> | undefined;
    private 'admin_state_up'?: boolean | undefined;
    private 'connection_limit'?: Array<number> | undefined;
    private 'default_pool_id'?: Array<string> | undefined;
    public id?: Array<string>;
    public name?: Array<string>;
    private 'http2_enable'?: boolean | undefined;
    private 'loadbalancer_id'?: Array<string> | undefined;
    private 'tls_ciphers_policy'?: Array<string> | undefined;
    private 'member_address'?: Array<string> | undefined;
    private 'member_device_id'?: Array<string> | undefined;
    private 'enterprise_project_id'?: Array<string> | undefined;
    private 'enable_member_retry'?: boolean | undefined;
    private 'member_timeout'?: Array<number> | undefined;
    private 'client_timeout'?: Array<number> | undefined;
    private 'keepalive_timeout'?: Array<number> | undefined;
    private 'transparent_client_ip_enable'?: boolean | undefined;
    private 'enhance_l7policy_enable'?: boolean | undefined;
    private 'member_instance_id'?: Array<string> | undefined;
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
    public withProtocolPort(protocolPort: Array<string>): ListListenersRequest {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: Array<string> | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort() {
        return this['protocol_port'];
    }
    public withProtocol(protocol: Array<string>): ListListenersRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withDescription(description: Array<string>): ListListenersRequest {
        this['description'] = description;
        return this;
    }
    public withDefaultTlsContainerRef(defaultTlsContainerRef: Array<string>): ListListenersRequest {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        return this;
    }
    public set defaultTlsContainerRef(defaultTlsContainerRef: Array<string> | undefined) {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public get defaultTlsContainerRef() {
        return this['default_tls_container_ref'];
    }
    public withClientCaTlsContainerRef(clientCaTlsContainerRef: Array<string>): ListListenersRequest {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        return this;
    }
    public set clientCaTlsContainerRef(clientCaTlsContainerRef: Array<string> | undefined) {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
    }
    public get clientCaTlsContainerRef() {
        return this['client_ca_tls_container_ref'];
    }
    public withAdminStateUp(adminStateUp: boolean): ListListenersRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withConnectionLimit(connectionLimit: Array<number>): ListListenersRequest {
        this['connection_limit'] = connectionLimit;
        return this;
    }
    public set connectionLimit(connectionLimit: Array<number> | undefined) {
        this['connection_limit'] = connectionLimit;
    }
    public get connectionLimit() {
        return this['connection_limit'];
    }
    public withDefaultPoolId(defaultPoolId: Array<string>): ListListenersRequest {
        this['default_pool_id'] = defaultPoolId;
        return this;
    }
    public set defaultPoolId(defaultPoolId: Array<string> | undefined) {
        this['default_pool_id'] = defaultPoolId;
    }
    public get defaultPoolId() {
        return this['default_pool_id'];
    }
    public withId(id: Array<string>): ListListenersRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListListenersRequest {
        this['name'] = name;
        return this;
    }
    public withHttp2Enable(http2Enable: boolean): ListListenersRequest {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable() {
        return this['http2_enable'];
    }
    public withLoadbalancerId(loadbalancerId: Array<string>): ListListenersRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: Array<string> | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withTlsCiphersPolicy(tlsCiphersPolicy: Array<string>): ListListenersRequest {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
        return this;
    }
    public set tlsCiphersPolicy(tlsCiphersPolicy: Array<string> | undefined) {
        this['tls_ciphers_policy'] = tlsCiphersPolicy;
    }
    public get tlsCiphersPolicy() {
        return this['tls_ciphers_policy'];
    }
    public withMemberAddress(memberAddress: Array<string>): ListListenersRequest {
        this['member_address'] = memberAddress;
        return this;
    }
    public set memberAddress(memberAddress: Array<string> | undefined) {
        this['member_address'] = memberAddress;
    }
    public get memberAddress() {
        return this['member_address'];
    }
    public withMemberDeviceId(memberDeviceId: Array<string>): ListListenersRequest {
        this['member_device_id'] = memberDeviceId;
        return this;
    }
    public set memberDeviceId(memberDeviceId: Array<string> | undefined) {
        this['member_device_id'] = memberDeviceId;
    }
    public get memberDeviceId() {
        return this['member_device_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListListenersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string> | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withEnableMemberRetry(enableMemberRetry: boolean): ListListenersRequest {
        this['enable_member_retry'] = enableMemberRetry;
        return this;
    }
    public set enableMemberRetry(enableMemberRetry: boolean | undefined) {
        this['enable_member_retry'] = enableMemberRetry;
    }
    public get enableMemberRetry() {
        return this['enable_member_retry'];
    }
    public withMemberTimeout(memberTimeout: Array<number>): ListListenersRequest {
        this['member_timeout'] = memberTimeout;
        return this;
    }
    public set memberTimeout(memberTimeout: Array<number> | undefined) {
        this['member_timeout'] = memberTimeout;
    }
    public get memberTimeout() {
        return this['member_timeout'];
    }
    public withClientTimeout(clientTimeout: Array<number>): ListListenersRequest {
        this['client_timeout'] = clientTimeout;
        return this;
    }
    public set clientTimeout(clientTimeout: Array<number> | undefined) {
        this['client_timeout'] = clientTimeout;
    }
    public get clientTimeout() {
        return this['client_timeout'];
    }
    public withKeepaliveTimeout(keepaliveTimeout: Array<number>): ListListenersRequest {
        this['keepalive_timeout'] = keepaliveTimeout;
        return this;
    }
    public set keepaliveTimeout(keepaliveTimeout: Array<number> | undefined) {
        this['keepalive_timeout'] = keepaliveTimeout;
    }
    public get keepaliveTimeout() {
        return this['keepalive_timeout'];
    }
    public withTransparentClientIpEnable(transparentClientIpEnable: boolean): ListListenersRequest {
        this['transparent_client_ip_enable'] = transparentClientIpEnable;
        return this;
    }
    public set transparentClientIpEnable(transparentClientIpEnable: boolean | undefined) {
        this['transparent_client_ip_enable'] = transparentClientIpEnable;
    }
    public get transparentClientIpEnable() {
        return this['transparent_client_ip_enable'];
    }
    public withEnhanceL7policyEnable(enhanceL7policyEnable: boolean): ListListenersRequest {
        this['enhance_l7policy_enable'] = enhanceL7policyEnable;
        return this;
    }
    public set enhanceL7policyEnable(enhanceL7policyEnable: boolean | undefined) {
        this['enhance_l7policy_enable'] = enhanceL7policyEnable;
    }
    public get enhanceL7policyEnable() {
        return this['enhance_l7policy_enable'];
    }
    public withMemberInstanceId(memberInstanceId: Array<string>): ListListenersRequest {
        this['member_instance_id'] = memberInstanceId;
        return this;
    }
    public set memberInstanceId(memberInstanceId: Array<string> | undefined) {
        this['member_instance_id'] = memberInstanceId;
    }
    public get memberInstanceId() {
        return this['member_instance_id'];
    }
}