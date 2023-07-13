import { PortList } from './PortList';
import { TagList } from './TagList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceDetailsResponse extends SdkResponse {
    public id?: string;
    private 'port_id'?: string | undefined;
    private 'service_name'?: string | undefined;
    private 'server_type'?: ListServiceDetailsResponseServerTypeEnum | undefined;
    private 'vpc_id'?: string | undefined;
    private 'approval_enabled'?: boolean | undefined;
    public status?: ListServiceDetailsResponseStatusEnum;
    private 'service_type'?: ListServiceDetailsResponseServiceTypeEnum | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'cidr_type'?: string | undefined;
    public ports?: Array<PortList>;
    private 'tcp_proxy'?: ListServiceDetailsResponseTcpProxyEnum | undefined;
    public tags?: Array<TagList>;
    public error?: Array<Error>;
    private 'enable_policy'?: boolean | undefined;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ListServiceDetailsResponse {
        this['id'] = id;
        return this;
    }
    public withPortId(portId: string): ListServiceDetailsResponse {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
    public withServiceName(serviceName: string): ListServiceDetailsResponse {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName() {
        return this['service_name'];
    }
    public withServerType(serverType: ListServiceDetailsResponseServerTypeEnum): ListServiceDetailsResponse {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: ListServiceDetailsResponseServerTypeEnum | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType() {
        return this['server_type'];
    }
    public withVpcId(vpcId: string): ListServiceDetailsResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withApprovalEnabled(approvalEnabled: boolean): ListServiceDetailsResponse {
        this['approval_enabled'] = approvalEnabled;
        return this;
    }
    public set approvalEnabled(approvalEnabled: boolean | undefined) {
        this['approval_enabled'] = approvalEnabled;
    }
    public get approvalEnabled() {
        return this['approval_enabled'];
    }
    public withStatus(status: ListServiceDetailsResponseStatusEnum): ListServiceDetailsResponse {
        this['status'] = status;
        return this;
    }
    public withServiceType(serviceType: ListServiceDetailsResponseServiceTypeEnum): ListServiceDetailsResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ListServiceDetailsResponseServiceTypeEnum | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withCreatedAt(createdAt: string): ListServiceDetailsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ListServiceDetailsResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): ListServiceDetailsResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withCidrType(cidrType: string): ListServiceDetailsResponse {
        this['cidr_type'] = cidrType;
        return this;
    }
    public set cidrType(cidrType: string | undefined) {
        this['cidr_type'] = cidrType;
    }
    public get cidrType() {
        return this['cidr_type'];
    }
    public withPorts(ports: Array<PortList>): ListServiceDetailsResponse {
        this['ports'] = ports;
        return this;
    }
    public withTcpProxy(tcpProxy: ListServiceDetailsResponseTcpProxyEnum): ListServiceDetailsResponse {
        this['tcp_proxy'] = tcpProxy;
        return this;
    }
    public set tcpProxy(tcpProxy: ListServiceDetailsResponseTcpProxyEnum | undefined) {
        this['tcp_proxy'] = tcpProxy;
    }
    public get tcpProxy() {
        return this['tcp_proxy'];
    }
    public withTags(tags: Array<TagList>): ListServiceDetailsResponse {
        this['tags'] = tags;
        return this;
    }
    public withError(error: Array<Error>): ListServiceDetailsResponse {
        this['error'] = error;
        return this;
    }
    public withEnablePolicy(enablePolicy: boolean): ListServiceDetailsResponse {
        this['enable_policy'] = enablePolicy;
        return this;
    }
    public set enablePolicy(enablePolicy: boolean | undefined) {
        this['enable_policy'] = enablePolicy;
    }
    public get enablePolicy() {
        return this['enable_policy'];
    }
    public withDescription(description: string): ListServiceDetailsResponse {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListServiceDetailsResponseServerTypeEnum {
    VM = 'VM',
    VIP = 'VIP',
    LB = 'LB'
}
/**
    * @export
    * @enum {string}
    */
export enum ListServiceDetailsResponseStatusEnum {
    CREATING = 'creating',
    AVAILABLE = 'available',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum ListServiceDetailsResponseServiceTypeEnum {
    GATAWAY = 'gataway',
    INTERFACE = 'interface'
}
/**
    * @export
    * @enum {string}
    */
export enum ListServiceDetailsResponseTcpProxyEnum {
    CLOSE = 'close',
    TOA_OPEN = 'toa_open',
    PROXY_OPEN = 'proxy_open',
    OPEN = 'open',
    PROXY_VNI = 'proxy_vni'
}
