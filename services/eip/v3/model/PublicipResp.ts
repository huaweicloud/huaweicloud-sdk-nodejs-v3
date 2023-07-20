import { BandwidthResp } from './BandwidthResp';
import { VnicResp } from './VnicResp';


export class PublicipResp {
    public id?: string;
    private 'project_id'?: string;
    private 'ip_version'?: PublicipRespIpVersionEnum | number;
    private 'public_ip_address'?: string;
    private 'public_ipv6_address'?: string;
    public status?: PublicipRespStatusEnum | string;
    public description?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public type?: PublicipRespTypeEnum | string;
    public vnic?: VnicResp;
    public bandwidth?: BandwidthResp;
    private 'enterprise_project_id'?: string;
    private 'billing_info'?: string;
    private 'lock_status'?: string;
    private 'associate_instance_type'?: PublicipRespAssociateInstanceTypeEnum | string;
    private 'associate_instance_id'?: string;
    private 'publicip_pool_id'?: string;
    private 'publicip_pool_name'?: string;
    public alias?: string;
    private 'public_border_group'?: string;
    public constructor() { 
    }
    public withId(id: string): PublicipResp {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): PublicipResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIpVersion(ipVersion: PublicipRespIpVersionEnum | number): PublicipResp {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: PublicipRespIpVersionEnum | number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): PublicipRespIpVersionEnum | number | undefined {
        return this['ip_version'];
    }
    public withPublicIpAddress(publicIpAddress: string): PublicipResp {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): string | undefined {
        return this['public_ip_address'];
    }
    public withPublicIpv6Address(publicIpv6Address: string): PublicipResp {
        this['public_ipv6_address'] = publicIpv6Address;
        return this;
    }
    public set publicIpv6Address(publicIpv6Address: string  | undefined) {
        this['public_ipv6_address'] = publicIpv6Address;
    }
    public get publicIpv6Address(): string | undefined {
        return this['public_ipv6_address'];
    }
    public withStatus(status: PublicipRespStatusEnum | string): PublicipResp {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): PublicipResp {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): PublicipResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): PublicipResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withType(type: PublicipRespTypeEnum | string): PublicipResp {
        this['type'] = type;
        return this;
    }
    public withVnic(vnic: VnicResp): PublicipResp {
        this['vnic'] = vnic;
        return this;
    }
    public withBandwidth(bandwidth: BandwidthResp): PublicipResp {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PublicipResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBillingInfo(billingInfo: string): PublicipResp {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withLockStatus(lockStatus: string): PublicipResp {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: string  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): string | undefined {
        return this['lock_status'];
    }
    public withAssociateInstanceType(associateInstanceType: PublicipRespAssociateInstanceTypeEnum | string): PublicipResp {
        this['associate_instance_type'] = associateInstanceType;
        return this;
    }
    public set associateInstanceType(associateInstanceType: PublicipRespAssociateInstanceTypeEnum | string  | undefined) {
        this['associate_instance_type'] = associateInstanceType;
    }
    public get associateInstanceType(): PublicipRespAssociateInstanceTypeEnum | string | undefined {
        return this['associate_instance_type'];
    }
    public withAssociateInstanceId(associateInstanceId: string): PublicipResp {
        this['associate_instance_id'] = associateInstanceId;
        return this;
    }
    public set associateInstanceId(associateInstanceId: string  | undefined) {
        this['associate_instance_id'] = associateInstanceId;
    }
    public get associateInstanceId(): string | undefined {
        return this['associate_instance_id'];
    }
    public withPublicipPoolId(publicipPoolId: string): PublicipResp {
        this['publicip_pool_id'] = publicipPoolId;
        return this;
    }
    public set publicipPoolId(publicipPoolId: string  | undefined) {
        this['publicip_pool_id'] = publicipPoolId;
    }
    public get publicipPoolId(): string | undefined {
        return this['publicip_pool_id'];
    }
    public withPublicipPoolName(publicipPoolName: string): PublicipResp {
        this['publicip_pool_name'] = publicipPoolName;
        return this;
    }
    public set publicipPoolName(publicipPoolName: string  | undefined) {
        this['publicip_pool_name'] = publicipPoolName;
    }
    public get publicipPoolName(): string | undefined {
        return this['publicip_pool_name'];
    }
    public withAlias(alias: string): PublicipResp {
        this['alias'] = alias;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): PublicipResp {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicipRespIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
/**
    * @export
    * @enum {string}
    */
export enum PublicipRespStatusEnum {
    FREEZED = 'FREEZED',
    DOWN = 'DOWN',
    ACTIVE = 'ACTIVE',
    ERROR = 'ERROR'
}
/**
    * @export
    * @enum {string}
    */
export enum PublicipRespTypeEnum {
    EIP = 'EIP',
    DUALSTACK = 'DUALSTACK'
}
/**
    * @export
    * @enum {string}
    */
export enum PublicipRespAssociateInstanceTypeEnum {
    PORT = 'PORT',
    NATGW = 'NATGW',
    ELB = 'ELB',
    ELBV1 = 'ELBV1',
    VPN = 'VPN'
}
