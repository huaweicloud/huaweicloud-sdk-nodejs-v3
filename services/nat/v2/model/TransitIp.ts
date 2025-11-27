import { Tag } from './Tag';


export class TransitIp {
    public id?: string;
    private 'project_id'?: string;
    private 'network_interface_id'?: string;
    private 'ip_address'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'virsubnet_id'?: string;
    public tags?: Array<Tag>;
    private 'gateway_id'?: string;
    private 'enterprise_project_id'?: string;
    public status?: TransitIpStatusEnum | string;
    public constructor(id?: string, projectId?: string, networkInterfaceId?: string, ipAddress?: string, createdAt?: Date, updatedAt?: Date, gatewayId?: string, enterpriseProjectId?: string) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['network_interface_id'] = networkInterfaceId;
        this['ip_address'] = ipAddress;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['gateway_id'] = gatewayId;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withId(id: string): TransitIp {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): TransitIp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withNetworkInterfaceId(networkInterfaceId: string): TransitIp {
        this['network_interface_id'] = networkInterfaceId;
        return this;
    }
    public set networkInterfaceId(networkInterfaceId: string  | undefined) {
        this['network_interface_id'] = networkInterfaceId;
    }
    public get networkInterfaceId(): string | undefined {
        return this['network_interface_id'];
    }
    public withIpAddress(ipAddress: string): TransitIp {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withCreatedAt(createdAt: Date): TransitIp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): TransitIp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withVirsubnetId(virsubnetId: string): TransitIp {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withTags(tags: Array<Tag>): TransitIp {
        this['tags'] = tags;
        return this;
    }
    public withGatewayId(gatewayId: string): TransitIp {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): TransitIp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withStatus(status: TransitIpStatusEnum | string): TransitIp {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TransitIpStatusEnum {
    ACTIVE = 'ACTIVE',
    FROZEN = 'FROZEN',
    INACTIVE = 'INACTIVE'
}
