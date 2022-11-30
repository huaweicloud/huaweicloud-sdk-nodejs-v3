import { PortList } from './PortList';
import { TagList } from './TagList';


export class ServiceList {
    public id?: string;
    private 'port_id'?: string | undefined;
    private 'vip_port_id'?: string | undefined;
    private 'service_name'?: string | undefined;
    private 'server_type'?: string | undefined;
    private 'vpc_id'?: string | undefined;
    private 'approval_enabled'?: boolean | undefined;
    public status?: ServiceListStatusEnum;
    private 'service_type'?: ServiceListServiceTypeEnum | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'domain_id'?: string | undefined;
    public ports?: Array<PortList>;
    public tags?: Array<TagList>;
    private 'connection_count'?: number | undefined;
    private 'tcp_proxy'?: ServiceListTcpProxyEnum | undefined;
    public error?: Array<Error>;
    public description?: string;
    private 'public_border_group'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): ServiceList {
        this['id'] = id;
        return this;
    }
    public withPortId(portId: string): ServiceList {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
    public withVipPortId(vipPortId: string): ServiceList {
        this['vip_port_id'] = vipPortId;
        return this;
    }
    public set vipPortId(vipPortId: string | undefined) {
        this['vip_port_id'] = vipPortId;
    }
    public get vipPortId() {
        return this['vip_port_id'];
    }
    public withServiceName(serviceName: string): ServiceList {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName() {
        return this['service_name'];
    }
    public withServerType(serverType: string): ServiceList {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType() {
        return this['server_type'];
    }
    public withVpcId(vpcId: string): ServiceList {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withApprovalEnabled(approvalEnabled: boolean): ServiceList {
        this['approval_enabled'] = approvalEnabled;
        return this;
    }
    public set approvalEnabled(approvalEnabled: boolean | undefined) {
        this['approval_enabled'] = approvalEnabled;
    }
    public get approvalEnabled() {
        return this['approval_enabled'];
    }
    public withStatus(status: ServiceListStatusEnum): ServiceList {
        this['status'] = status;
        return this;
    }
    public withServiceType(serviceType: ServiceListServiceTypeEnum): ServiceList {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ServiceListServiceTypeEnum | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withCreatedAt(createdAt: string): ServiceList {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ServiceList {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): ServiceList {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withDomainId(domainId: string): ServiceList {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withPorts(ports: Array<PortList>): ServiceList {
        this['ports'] = ports;
        return this;
    }
    public withTags(tags: Array<TagList>): ServiceList {
        this['tags'] = tags;
        return this;
    }
    public withConnectionCount(connectionCount: number): ServiceList {
        this['connection_count'] = connectionCount;
        return this;
    }
    public set connectionCount(connectionCount: number | undefined) {
        this['connection_count'] = connectionCount;
    }
    public get connectionCount() {
        return this['connection_count'];
    }
    public withTcpProxy(tcpProxy: ServiceListTcpProxyEnum): ServiceList {
        this['tcp_proxy'] = tcpProxy;
        return this;
    }
    public set tcpProxy(tcpProxy: ServiceListTcpProxyEnum | undefined) {
        this['tcp_proxy'] = tcpProxy;
    }
    public get tcpProxy() {
        return this['tcp_proxy'];
    }
    public withError(error: Array<Error>): ServiceList {
        this['error'] = error;
        return this;
    }
    public withDescription(description: string): ServiceList {
        this['description'] = description;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): ServiceList {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup() {
        return this['public_border_group'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ServiceListStatusEnum {
    CREATING = 'creating',
    AVAILABLE = 'available',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum ServiceListServiceTypeEnum {
    VM = 'VM',
    VIP = 'VIP',
    LB = 'LB'
}
/**
    * @export
    * @enum {string}
    */
export enum ServiceListTcpProxyEnum {
    CLOSE = 'close',
    TOA_OPEN = 'toa_open',
    PROXY_OPEN = 'proxy_open',
    OPEN = 'open'
}
