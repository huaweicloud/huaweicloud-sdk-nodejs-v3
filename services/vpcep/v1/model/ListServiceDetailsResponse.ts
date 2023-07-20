import { PortList } from './PortList';
import { TagList } from './TagList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceDetailsResponse extends SdkResponse {
    public id?: string;
    private 'port_id'?: string;
    private 'service_name'?: string;
    private 'server_type'?: ListServiceDetailsResponseServerTypeEnum | string;
    private 'vpc_id'?: string;
    private 'approval_enabled'?: boolean;
    public status?: ListServiceDetailsResponseStatusEnum | string;
    private 'service_type'?: ListServiceDetailsResponseServiceTypeEnum | string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'project_id'?: string;
    private 'cidr_type'?: string;
    public ports?: Array<PortList>;
    private 'tcp_proxy'?: ListServiceDetailsResponseTcpProxyEnum | string;
    public tags?: Array<TagList>;
    public error?: Array<Error>;
    private 'enable_policy'?: boolean;
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
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withServiceName(serviceName: string): ListServiceDetailsResponse {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withServerType(serverType: ListServiceDetailsResponseServerTypeEnum | string): ListServiceDetailsResponse {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: ListServiceDetailsResponseServerTypeEnum | string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): ListServiceDetailsResponseServerTypeEnum | string | undefined {
        return this['server_type'];
    }
    public withVpcId(vpcId: string): ListServiceDetailsResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withApprovalEnabled(approvalEnabled: boolean): ListServiceDetailsResponse {
        this['approval_enabled'] = approvalEnabled;
        return this;
    }
    public set approvalEnabled(approvalEnabled: boolean  | undefined) {
        this['approval_enabled'] = approvalEnabled;
    }
    public get approvalEnabled(): boolean | undefined {
        return this['approval_enabled'];
    }
    public withStatus(status: ListServiceDetailsResponseStatusEnum | string): ListServiceDetailsResponse {
        this['status'] = status;
        return this;
    }
    public withServiceType(serviceType: ListServiceDetailsResponseServiceTypeEnum | string): ListServiceDetailsResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ListServiceDetailsResponseServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): ListServiceDetailsResponseServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withCreatedAt(createdAt: string): ListServiceDetailsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ListServiceDetailsResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): ListServiceDetailsResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCidrType(cidrType: string): ListServiceDetailsResponse {
        this['cidr_type'] = cidrType;
        return this;
    }
    public set cidrType(cidrType: string  | undefined) {
        this['cidr_type'] = cidrType;
    }
    public get cidrType(): string | undefined {
        return this['cidr_type'];
    }
    public withPorts(ports: Array<PortList>): ListServiceDetailsResponse {
        this['ports'] = ports;
        return this;
    }
    public withTcpProxy(tcpProxy: ListServiceDetailsResponseTcpProxyEnum | string): ListServiceDetailsResponse {
        this['tcp_proxy'] = tcpProxy;
        return this;
    }
    public set tcpProxy(tcpProxy: ListServiceDetailsResponseTcpProxyEnum | string  | undefined) {
        this['tcp_proxy'] = tcpProxy;
    }
    public get tcpProxy(): ListServiceDetailsResponseTcpProxyEnum | string | undefined {
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
    public set enablePolicy(enablePolicy: boolean  | undefined) {
        this['enable_policy'] = enablePolicy;
    }
    public get enablePolicy(): boolean | undefined {
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
