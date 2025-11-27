import { AssociatedTransitIp } from './AssociatedTransitIp';


export class PrivateSnat {
    public id?: string;
    private 'project_id'?: string;
    private 'gateway_id'?: string;
    public cidr?: string;
    private 'virsubnet_id'?: string;
    public description?: string;
    private 'transit_ip_associations'?: Array<AssociatedTransitIp>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'enterprise_project_id'?: string;
    public status?: PrivateSnatStatusEnum | string;
    public constructor() { 
    }
    public withId(id: string): PrivateSnat {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): PrivateSnat {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withGatewayId(gatewayId: string): PrivateSnat {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withCidr(cidr: string): PrivateSnat {
        this['cidr'] = cidr;
        return this;
    }
    public withVirsubnetId(virsubnetId: string): PrivateSnat {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withDescription(description: string): PrivateSnat {
        this['description'] = description;
        return this;
    }
    public withTransitIpAssociations(transitIpAssociations: Array<AssociatedTransitIp>): PrivateSnat {
        this['transit_ip_associations'] = transitIpAssociations;
        return this;
    }
    public set transitIpAssociations(transitIpAssociations: Array<AssociatedTransitIp>  | undefined) {
        this['transit_ip_associations'] = transitIpAssociations;
    }
    public get transitIpAssociations(): Array<AssociatedTransitIp> | undefined {
        return this['transit_ip_associations'];
    }
    public withCreatedAt(createdAt: Date): PrivateSnat {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): PrivateSnat {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PrivateSnat {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withStatus(status: PrivateSnatStatusEnum | string): PrivateSnat {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrivateSnatStatusEnum {
    ACTIVE = 'ACTIVE',
    FROZEN = 'FROZEN',
    INACTIVE = 'INACTIVE'
}
