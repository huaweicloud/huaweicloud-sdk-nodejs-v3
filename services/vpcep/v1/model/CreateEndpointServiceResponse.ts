import { PortList } from './PortList';
import { TagList } from './TagList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEndpointServiceResponse extends SdkResponse {
    public id?: string;
    private 'port_id'?: string;
    private 'service_name'?: string;
    private 'server_type'?: CreateEndpointServiceResponseServerTypeEnum | string;
    private 'vpc_id'?: string;
    private 'pool_id'?: string;
    private 'approval_enabled'?: boolean;
    public status?: CreateEndpointServiceResponseStatusEnum | string;
    private 'service_type'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'project_id'?: string;
    public ports?: Array<PortList>;
    private 'tcp_proxy'?: CreateEndpointServiceResponseTcpProxyEnum | string;
    public tags?: Array<TagList>;
    public description?: string;
    private 'enable_policy'?: boolean;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateEndpointServiceResponse {
        this['id'] = id;
        return this;
    }
    public withPortId(portId: string): CreateEndpointServiceResponse {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withServiceName(serviceName: string): CreateEndpointServiceResponse {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withServerType(serverType: CreateEndpointServiceResponseServerTypeEnum | string): CreateEndpointServiceResponse {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: CreateEndpointServiceResponseServerTypeEnum | string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): CreateEndpointServiceResponseServerTypeEnum | string | undefined {
        return this['server_type'];
    }
    public withVpcId(vpcId: string): CreateEndpointServiceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withPoolId(poolId: string): CreateEndpointServiceResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withApprovalEnabled(approvalEnabled: boolean): CreateEndpointServiceResponse {
        this['approval_enabled'] = approvalEnabled;
        return this;
    }
    public set approvalEnabled(approvalEnabled: boolean  | undefined) {
        this['approval_enabled'] = approvalEnabled;
    }
    public get approvalEnabled(): boolean | undefined {
        return this['approval_enabled'];
    }
    public withStatus(status: CreateEndpointServiceResponseStatusEnum | string): CreateEndpointServiceResponse {
        this['status'] = status;
        return this;
    }
    public withServiceType(serviceType: string): CreateEndpointServiceResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withCreatedAt(createdAt: string): CreateEndpointServiceResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CreateEndpointServiceResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): CreateEndpointServiceResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPorts(ports: Array<PortList>): CreateEndpointServiceResponse {
        this['ports'] = ports;
        return this;
    }
    public withTcpProxy(tcpProxy: CreateEndpointServiceResponseTcpProxyEnum | string): CreateEndpointServiceResponse {
        this['tcp_proxy'] = tcpProxy;
        return this;
    }
    public set tcpProxy(tcpProxy: CreateEndpointServiceResponseTcpProxyEnum | string  | undefined) {
        this['tcp_proxy'] = tcpProxy;
    }
    public get tcpProxy(): CreateEndpointServiceResponseTcpProxyEnum | string | undefined {
        return this['tcp_proxy'];
    }
    public withTags(tags: Array<TagList>): CreateEndpointServiceResponse {
        this['tags'] = tags;
        return this;
    }
    public withDescription(description: string): CreateEndpointServiceResponse {
        this['description'] = description;
        return this;
    }
    public withEnablePolicy(enablePolicy: boolean): CreateEndpointServiceResponse {
        this['enable_policy'] = enablePolicy;
        return this;
    }
    public set enablePolicy(enablePolicy: boolean  | undefined) {
        this['enable_policy'] = enablePolicy;
    }
    public get enablePolicy(): boolean | undefined {
        return this['enable_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateEndpointServiceResponseServerTypeEnum {
    VM = 'VM',
    VIP = 'VIP',
    LB = 'LB'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateEndpointServiceResponseStatusEnum {
    CREATING = 'creating',
    AVAILABLE = 'available',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateEndpointServiceResponseTcpProxyEnum {
    CLOSE = 'close',
    TOA_OPEN = 'toa_open',
    PROXY_OPEN = 'proxy_open',
    OPEN = 'open',
    PROXY_VNI = 'proxy_vni'
}
