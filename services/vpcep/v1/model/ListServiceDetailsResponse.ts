import { PortList } from './PortList';
import { TagList } from './TagList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceDetailsResponse extends SdkResponse {
    public id?: string;
    private 'port_id'?: string;
    private 'service_name'?: string;
    private 'server_type'?: string;
    private 'vpc_id'?: string;
    private 'approval_enabled'?: boolean;
    public status?: string;
    private 'service_type'?: string;
    private 'supported_editions'?: Array<string>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'project_id'?: string;
    private 'cidr_type'?: string;
    public ip?: string;
    public ports?: Array<PortList>;
    private 'tcp_proxy'?: string;
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
    public withServerType(serverType: string): ListServiceDetailsResponse {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
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
    public withStatus(status: string): ListServiceDetailsResponse {
        this['status'] = status;
        return this;
    }
    public withServiceType(serviceType: string): ListServiceDetailsResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withSupportedEditions(supportedEditions: Array<string>): ListServiceDetailsResponse {
        this['supported_editions'] = supportedEditions;
        return this;
    }
    public set supportedEditions(supportedEditions: Array<string>  | undefined) {
        this['supported_editions'] = supportedEditions;
    }
    public get supportedEditions(): Array<string> | undefined {
        return this['supported_editions'];
    }
    public withCreatedAt(createdAt: Date): ListServiceDetailsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ListServiceDetailsResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
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
    public withIp(ip: string): ListServiceDetailsResponse {
        this['ip'] = ip;
        return this;
    }
    public withPorts(ports: Array<PortList>): ListServiceDetailsResponse {
        this['ports'] = ports;
        return this;
    }
    public withTcpProxy(tcpProxy: string): ListServiceDetailsResponse {
        this['tcp_proxy'] = tcpProxy;
        return this;
    }
    public set tcpProxy(tcpProxy: string  | undefined) {
        this['tcp_proxy'] = tcpProxy;
    }
    public get tcpProxy(): string | undefined {
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