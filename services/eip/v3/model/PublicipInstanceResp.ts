import { PublicipBandwidthInfo } from './PublicipBandwidthInfo';
import { VnicInfo } from './VnicInfo';


export class PublicipInstanceResp {
    public id?: string;
    private 'project_id'?: string;
    private 'ip_version'?: PublicipInstanceRespIpVersionEnum | number;
    private 'public_ip_address'?: string;
    private 'public_ipv6_address'?: string;
    public status?: PublicipInstanceRespStatusEnum | string;
    public description?: string;
    private 'public_border_group'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public type?: PublicipInstanceRespTypeEnum | string;
    public vnic?: VnicInfo;
    public bandwidth?: PublicipBandwidthInfo;
    private 'enterprise_project_id'?: string;
    private 'billing_info'?: string;
    private 'lock_status'?: string;
    private 'associate_instance_type'?: PublicipInstanceRespAssociateInstanceTypeEnum | string;
    private 'associate_instance_id'?: string;
    private 'publicip_pool_id'?: string;
    private 'publicip_pool_name'?: string;
    public alias?: string;
    public constructor() { 
    }
    public withId(id: string): PublicipInstanceResp {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): PublicipInstanceResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIpVersion(ipVersion: PublicipInstanceRespIpVersionEnum | number): PublicipInstanceResp {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: PublicipInstanceRespIpVersionEnum | number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): PublicipInstanceRespIpVersionEnum | number | undefined {
        return this['ip_version'];
    }
    public withPublicIpAddress(publicIpAddress: string): PublicipInstanceResp {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): string | undefined {
        return this['public_ip_address'];
    }
    public withPublicIpv6Address(publicIpv6Address: string): PublicipInstanceResp {
        this['public_ipv6_address'] = publicIpv6Address;
        return this;
    }
    public set publicIpv6Address(publicIpv6Address: string  | undefined) {
        this['public_ipv6_address'] = publicIpv6Address;
    }
    public get publicIpv6Address(): string | undefined {
        return this['public_ipv6_address'];
    }
    public withStatus(status: PublicipInstanceRespStatusEnum | string): PublicipInstanceResp {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): PublicipInstanceResp {
        this['description'] = description;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): PublicipInstanceResp {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withCreatedAt(createdAt: Date): PublicipInstanceResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): PublicipInstanceResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withType(type: PublicipInstanceRespTypeEnum | string): PublicipInstanceResp {
        this['type'] = type;
        return this;
    }
    public withVnic(vnic: VnicInfo): PublicipInstanceResp {
        this['vnic'] = vnic;
        return this;
    }
    public withBandwidth(bandwidth: PublicipBandwidthInfo): PublicipInstanceResp {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PublicipInstanceResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBillingInfo(billingInfo: string): PublicipInstanceResp {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withLockStatus(lockStatus: string): PublicipInstanceResp {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: string  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): string | undefined {
        return this['lock_status'];
    }
    public withAssociateInstanceType(associateInstanceType: PublicipInstanceRespAssociateInstanceTypeEnum | string): PublicipInstanceResp {
        this['associate_instance_type'] = associateInstanceType;
        return this;
    }
    public set associateInstanceType(associateInstanceType: PublicipInstanceRespAssociateInstanceTypeEnum | string  | undefined) {
        this['associate_instance_type'] = associateInstanceType;
    }
    public get associateInstanceType(): PublicipInstanceRespAssociateInstanceTypeEnum | string | undefined {
        return this['associate_instance_type'];
    }
    public withAssociateInstanceId(associateInstanceId: string): PublicipInstanceResp {
        this['associate_instance_id'] = associateInstanceId;
        return this;
    }
    public set associateInstanceId(associateInstanceId: string  | undefined) {
        this['associate_instance_id'] = associateInstanceId;
    }
    public get associateInstanceId(): string | undefined {
        return this['associate_instance_id'];
    }
    public withPublicipPoolId(publicipPoolId: string): PublicipInstanceResp {
        this['publicip_pool_id'] = publicipPoolId;
        return this;
    }
    public set publicipPoolId(publicipPoolId: string  | undefined) {
        this['publicip_pool_id'] = publicipPoolId;
    }
    public get publicipPoolId(): string | undefined {
        return this['publicip_pool_id'];
    }
    public withPublicipPoolName(publicipPoolName: string): PublicipInstanceResp {
        this['publicip_pool_name'] = publicipPoolName;
        return this;
    }
    public set publicipPoolName(publicipPoolName: string  | undefined) {
        this['publicip_pool_name'] = publicipPoolName;
    }
    public get publicipPoolName(): string | undefined {
        return this['publicip_pool_name'];
    }
    public withAlias(alias: string): PublicipInstanceResp {
        this['alias'] = alias;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicipInstanceRespIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
/**
    * @export
    * @enum {string}
    */
export enum PublicipInstanceRespStatusEnum {
    FREEZED = 'FREEZED',
    BIND_ERROR = 'BIND_ERROR',
    BINDING = 'BINDING',
    PENDING_DELETE = 'PENDING_DELETE',
    PENDING_CREATE = 'PENDING_CREATE',
    NOTIFYING = 'NOTIFYING',
    NOTIFY_DELETE = 'NOTIFY_DELETE',
    PENDING_UPDATE = 'PENDING_UPDATE',
    DOWN = 'DOWN',
    ACTIVE = 'ACTIVE',
    ELB = 'ELB',
    ERROR = 'ERROR',
    VPN = 'VPN'
}
/**
    * @export
    * @enum {string}
    */
export enum PublicipInstanceRespTypeEnum {
    EIP = 'EIP',
    DUALSTACK = 'DUALSTACK',
    DUALSTACK_SUBNET = 'DUALSTACK_SUBNET'
}
/**
    * @export
    * @enum {string}
    */
export enum PublicipInstanceRespAssociateInstanceTypeEnum {
    PORT = 'PORT',
    NATGW = 'NATGW',
    ELB = 'ELB',
    ELBV1 = 'ELBV1',
    VPN = 'VPN'
}
