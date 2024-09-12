import { PortList } from './PortList';
import { TagList } from './TagList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEndpointServiceResponse extends SdkResponse {
    public id?: string;
    private 'port_id'?: string;
    private 'service_name'?: string;
    private 'server_type'?: string;
    private 'vpc_id'?: string;
    private 'pool_id'?: string;
    private 'approval_enabled'?: boolean;
    public status?: string;
    private 'service_type'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'project_id'?: string;
    public ip?: string;
    public ports?: Array<PortList>;
    private 'tcp_proxy'?: string;
    public tags?: Array<TagList>;
    public description?: string;
    private 'enable_policy'?: boolean;
    private 'ip_version'?: CreateEndpointServiceResponseIpVersionEnum | string;
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
    public withServerType(serverType: string): CreateEndpointServiceResponse {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
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
    public withStatus(status: string): CreateEndpointServiceResponse {
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
    public withCreatedAt(createdAt: Date): CreateEndpointServiceResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): CreateEndpointServiceResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
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
    public withIp(ip: string): CreateEndpointServiceResponse {
        this['ip'] = ip;
        return this;
    }
    public withPorts(ports: Array<PortList>): CreateEndpointServiceResponse {
        this['ports'] = ports;
        return this;
    }
    public withTcpProxy(tcpProxy: string): CreateEndpointServiceResponse {
        this['tcp_proxy'] = tcpProxy;
        return this;
    }
    public set tcpProxy(tcpProxy: string  | undefined) {
        this['tcp_proxy'] = tcpProxy;
    }
    public get tcpProxy(): string | undefined {
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
    public withIpVersion(ipVersion: CreateEndpointServiceResponseIpVersionEnum | string): CreateEndpointServiceResponse {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: CreateEndpointServiceResponseIpVersionEnum | string  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): CreateEndpointServiceResponseIpVersionEnum | string | undefined {
        return this['ip_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateEndpointServiceResponseIpVersionEnum {
    IPV4 = 'ipv4',
    IPV6 = 'ipv6'
}
