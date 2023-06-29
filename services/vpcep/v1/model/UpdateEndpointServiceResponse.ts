import { PortList } from './PortList';
import { TagList } from './TagList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEndpointServiceResponse extends SdkResponse {
    public id?: string;
    private 'port_id'?: string | undefined;
    private 'service_name'?: string | undefined;
    private 'server_type'?: UpdateEndpointServiceResponseServerTypeEnum | undefined;
    private 'vpc_id'?: string | undefined;
    private 'pool_id'?: string | undefined;
    private 'approval_enabled'?: boolean | undefined;
    public status?: UpdateEndpointServiceResponseStatusEnum;
    private 'service_type'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    private 'project_id'?: string | undefined;
    public ports?: Array<PortList>;
    private 'tcp_proxy'?: UpdateEndpointServiceResponseTcpProxyEnum | undefined;
    public tags?: Array<TagList>;
    public description?: string;
    private 'enable_policy'?: boolean | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateEndpointServiceResponse {
        this['id'] = id;
        return this;
    }
    public withPortId(portId: string): UpdateEndpointServiceResponse {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
    public withServiceName(serviceName: string): UpdateEndpointServiceResponse {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName() {
        return this['service_name'];
    }
    public withServerType(serverType: UpdateEndpointServiceResponseServerTypeEnum): UpdateEndpointServiceResponse {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: UpdateEndpointServiceResponseServerTypeEnum | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType() {
        return this['server_type'];
    }
    public withVpcId(vpcId: string): UpdateEndpointServiceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withPoolId(poolId: string): UpdateEndpointServiceResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
    public withApprovalEnabled(approvalEnabled: boolean): UpdateEndpointServiceResponse {
        this['approval_enabled'] = approvalEnabled;
        return this;
    }
    public set approvalEnabled(approvalEnabled: boolean | undefined) {
        this['approval_enabled'] = approvalEnabled;
    }
    public get approvalEnabled() {
        return this['approval_enabled'];
    }
    public withStatus(status: UpdateEndpointServiceResponseStatusEnum): UpdateEndpointServiceResponse {
        this['status'] = status;
        return this;
    }
    public withServiceType(serviceType: string): UpdateEndpointServiceResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withCreatedAt(createdAt: string): UpdateEndpointServiceResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdateEndpointServiceResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): UpdateEndpointServiceResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withPorts(ports: Array<PortList>): UpdateEndpointServiceResponse {
        this['ports'] = ports;
        return this;
    }
    public withTcpProxy(tcpProxy: UpdateEndpointServiceResponseTcpProxyEnum): UpdateEndpointServiceResponse {
        this['tcp_proxy'] = tcpProxy;
        return this;
    }
    public set tcpProxy(tcpProxy: UpdateEndpointServiceResponseTcpProxyEnum | undefined) {
        this['tcp_proxy'] = tcpProxy;
    }
    public get tcpProxy() {
        return this['tcp_proxy'];
    }
    public withTags(tags: Array<TagList>): UpdateEndpointServiceResponse {
        this['tags'] = tags;
        return this;
    }
    public withDescription(description: string): UpdateEndpointServiceResponse {
        this['description'] = description;
        return this;
    }
    public withEnablePolicy(enablePolicy: boolean): UpdateEndpointServiceResponse {
        this['enable_policy'] = enablePolicy;
        return this;
    }
    public set enablePolicy(enablePolicy: boolean | undefined) {
        this['enable_policy'] = enablePolicy;
    }
    public get enablePolicy() {
        return this['enable_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateEndpointServiceResponseServerTypeEnum {
    VM = 'VM',
    VIP = 'VIP',
    LB = 'LB'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateEndpointServiceResponseStatusEnum {
    CREATING = 'creating',
    AVAILABLE = 'available',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateEndpointServiceResponseTcpProxyEnum {
    CLOSE = 'close',
    TOA_OPEN = 'toa_open',
    PROXY_OPEN = 'proxy_open',
    OPEN = 'open',
    PROXY_VNI = 'proxy_vni'
}
